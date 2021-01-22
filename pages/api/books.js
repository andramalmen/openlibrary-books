import fetch from 'isomorphic-unfetch';

const BOOKS_ENDPOINT = 'http://openlibrary.org/';
const IMAGES_ENDPOINT = 'http://covers.openlibrary.org/';

const getImage = (id, size) => (id ? `${IMAGES_ENDPOINT}b/id/${id}-${size}.jpg` : undefined);

const getBooks = async title => {
    try {
        const results = await fetch(
            `${BOOKS_ENDPOINT}search.json?title=${encodeURIComponent(title)}`
        );
        const json = await results.json();
        const books = json.docs
            .map(book => {
                if (!book.author_name) {
                    return;
                }
                return {
                    id: book.isbn[0] + '-' + book.edition_key[0],
                    title: book.title,
                    author: book.author_name.toString(),
                    image: getImage(book.cover_i, 'S'),
                    thumbnail: getImage(book.cover_i, 'L'),
                };
            })
            .filter(b => b);

        return books;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export default async (req, res) => {
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
        const allBooks = await getBooks(title);
        const start = parseInt(page, 10);
        const limit = parseInt(page_limit, 10);
        const books = allBooks.slice((start - 1) * limit, start * limit);

        res.status(200).json(books);
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: 'No book not found.' });
    }
};
