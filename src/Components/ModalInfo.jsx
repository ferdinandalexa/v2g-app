import Portal from './Portal';
import Modal from './Modal';
import IconInfo from './Icons/IconInfo';

function ModalInfo ({ title, children, onClose }) {
  return (
    <Portal>
      <Modal onClose={onClose}>
        <header className='after:block after:border-b-2 after:border-neutral-600 after:h-1 after:w-full after:mt-1 mb-2'>
          <IconInfo className='fill-blue-400 inline-block mr-2' />
          <span className='text-neutral-200 align-middle'>
            {title}
          </span>
        </header>
        <p className='text-neutral-300 mx-2'>{children}</p>
      </Modal>
    </Portal>
  );
}

export default ModalInfo;
