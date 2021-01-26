import Image from 'next/image';
import * as React from 'react';
import ImageModal from './ImageModal';
import { IBook } from '../utils/types';
import { ModalData } from './ImageModal';

type BookProps = {
    book: IBook;
    layout: 'grid' | 'list';
};

const Book = ({ book, layout }: BookProps) => {
    const [showModal, setShowModal] = React.useState(false);
    const [modalContent, setModalContent] = React.useState<ModalData>({
        image: '',
        title: '',
    });

    const openModal = (e: React.MouseEvent<HTMLElement>, book: IBook) => {
        e.preventDefault();
        setShowModal(true);
        setModalContent({ image: book.image ?? '', title: book.title });
    };

    return (
        <>
            {showModal ? (
                <ImageModal book={modalContent} closeModal={() => setShowModal(false)} />
            ) : null}
            <div className="bg-white w-full flex items-center p-2 shadow border">
                <div className="relative flex items-center space-x-4">
                    {book.thumbnail ? (
                        <div className="cursor-pointer" onClick={e => openModal(e, book)}>
                            <Image src={book.thumbnail} alt={book.title} width={100} height={150} />
                        </div>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="100"
                            height="150"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15zm0 0h2v2h-2v-2z" />
                        </svg>
                    )}
                </div>
                <div className="flex-grow p-3">
                    <div className="font-semibold text-pink-700">{book.title}</div>
                    <div className="text-sm text-gray-500">{book.author}</div>
                    {layout === 'list' ? (
                        <div className="text-sm text-gray-500">
                            Publication year: {book.firstPublication}
                        </div>
                    ) : null}
                    {layout === 'list' ? (
                        <div className="text-sm text-gray-500">ISBN: {book.isbn}</div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Book;
