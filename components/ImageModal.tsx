import Image from 'next/image';
import Modal from './common/Modal';

const ImageModal = ({ book, closeModal }) => {
    return (
        <Modal closeModal={closeModal}>
            <Image src={book.image} alt={book.title} width={300} height={450} priority={true} />
        </Modal>
    );
};

export default ImageModal;
