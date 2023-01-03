function Spinner () {
  return (
    <div className='flex justify-center items-center flex-col gap-4 py-14'>
      <svg className='animate-spin -ml-1 mr-3 h-8 w-8 text-white opacity-75' fill='none' viewBox='0 0 24 24' role='presentation'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
      </svg>
      <span className='text-neutral-100 pr-3'>Loading...</span>
    </div>
  );
}

export default Spinner;
