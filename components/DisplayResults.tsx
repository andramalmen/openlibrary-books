import Book from './Book';
import * as React from 'react';
import { IBook } from '../utils/types';

type DisplayResultsProps = {
    books: IBook[];
    layout: 'grid' | 'list';
};

const DisplayResults = ({ books, layout }: DisplayResultsProps) => {
    const gridStyle = layout === 'grid' ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1';
    return (
        <div className={`grid ${gridStyle} gap-4 py-10`}>
            {books.map((book: IBook) => (
                <div key={book.id}>
                    <Book book={book} layout={layout} />
                </div>
            ))}
        </div>
    );
};

export default DisplayResults;
