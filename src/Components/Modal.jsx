function Modal ({ children, onClose }) {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-10 grid place-items-center bg-neutral-900/80 z-20 m-4'>
      <div onClick={onClose} className='bg-neutral-700 p-4 rounded-lg z-10 max-w-md relative'>
        <span className='absolute right-2 p-2 top-2 text-neutral-500 hover:text-red-500 transition-colors cursor-pointer'>🗙</span>
        {children}
      </div>
      <div onClick={onClose} className='h-full w-full absolute' />
    </div>
  );
}

export default Modal;
