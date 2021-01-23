import Book from './Book';

const DisplayResults = ({ books }) => {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-10">
                {books.map(book => (
                    <div key={book.id}>
                        <Book book={book} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default DisplayResults;
