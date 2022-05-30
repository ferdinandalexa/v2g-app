function Modal ({ children, onClose }) {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-20 grid m-4 place-items-center bg-neutral-900/80'>
      <div onClick={onClose} className='relative z-10 max-w-md p-4 rounded-lg bg-neutral-700'>
        <span className='absolute p-2 transition-colors cursor-pointer right-2 top-2 text-neutral-500 hover:text-red-500'>🗙</span>
        {children}
      </div>
      <div onClick={onClose} className='absolute w-full h-full' />
    </div>
  );
}

export default Modal;
