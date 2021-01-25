import fetch from 'isomorphic-unfetch';
import type { NextApiRequest, NextApiResponse } from 'next';
import { BOOKS_ENDPOINT, IMAGES_ENDPOINT } from '../../utils/constants';
import { IBook } from '../../utils/types';

interface Book extends IBook {
    edition_key: string[];
    author_name: string;
    cover_i: string;
    first_publish_year: number;
}

const getImage = (id: string, size: string) =>
    id ? `${IMAGES_ENDPOINT}b/id/${id}-${size}.jpg` : undefined;

const getBooks = async (title: string) => {
    try {
        const results = await fetch(
            `${BOOKS_ENDPOINT}search.json?title=${encodeURIComponent(title)}`
        );
        const json = await results.json();

        const books = json.docs
            .map((book: Book) => {
                if (!book.author_name || !book.isbn) {
                    return;
                }
                return {
                    id: book.isbn[0] + '-' + book.edition_key[0],
                    title: book.title,
                    author: book.author_name.toString(),
                    image: getImage(book.cover_i, 'L'),
                    thumbnail: getImage(book.cover_i, 'S'),
                    firstPublication: book.first_publish_year,
                    isbn: book.isbn[0] ?? null,
                };
            })
            .filter((b: IBook) => b);

        return books;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { title, page = 1, page_limit = 100 },
        method,
    } = req;

    if (method !== 'GET') {
        res.status(405).end(`Method ${method} not supported`);
        return;
    }

    if (!title) {
        res.status(400).end(`Search parameter for book was not defined`);
        return;
    }

    try {
        const allBooks = await getBooks(Array.isArray(title) ? title[0] : title);
        const start = Number(page);
        const limit = Number(page_limit);
        const books = allBooks.slice((start - 1) * limit, start * limit);
        const pages = Math.ceil(allBooks.length / limit);

        res.status(200).json({ numPages: pages, books });
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: 'No book not found.' });
    }
};
