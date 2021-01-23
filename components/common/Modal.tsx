import React from 'react';
import Image from 'next/image';

const Modal = ({ book, closeModal }) => {
    const hideModal = () => {
        closeModal();
    };

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={hideModal}
            >
                <div className="relative w-auto mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative p-6 flex-auto">
                            <Image src={book.image} alt={book.title} width={300} height={450} />
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                className="text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={hideModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Modal;
