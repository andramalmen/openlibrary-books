import Image from 'next/image';
import Modal from './common/Modal';

export type ModalData = {
    image: string;
    title: string;
};
type ImageModalProps = {
    book?: ModalData;
    closeModal: () => void;
};

const ImageModal = ({ book, closeModal }: ImageModalProps) => {
    if (!book || !book.image) {
        return null;
    }
    return (
        <Modal closeModal={closeModal}>
            <Image src={book.image} alt={book.title} width={300} height={450} priority={true} />
        </Modal>
    );
};

export default ImageModal;
