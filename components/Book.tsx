import Image from 'next/image';
import * as React from 'react';
import Modal from './common/Modal';

const Book = ({ book }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [modalContent, setModalContent] = React.useState();

    const openModal = (e, book) => {
        e.preventDefault();
        setShowModal(true);
        setModalContent(book);
    };

    return (
        <>
            {showModal ? (
                <Modal book={modalContent} closeModal={() => setShowModal(false)} />
            ) : null}
            <div className="bg-white w-full flex items-center p-2 shadow border">
                <div className="relative flex items-center space-x-4">
                    {book.thumbnail ? (
                        <div className="cursor-pointer" onClick={e => openModal(e, book)}>
                            <Image src={book.thumbnail} alt={book.title} width={38} height={58} />
                        </div>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="36"
                            height="36"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15zm0 0h2v2h-2v-2z" />
                        </svg>
                    )}
                </div>
                <div className="flex-grow p-3">
                    <div className="font-semibold text-pink-700">{book.title}</div>
                    <div className="text-sm text-gray-500">{book.author}</div>
                </div>
            </div>
        </>
    );
};

export default Book;
