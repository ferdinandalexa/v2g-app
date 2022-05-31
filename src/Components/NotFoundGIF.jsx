import { Link } from 'wouter';

function NotFoundGIF () {
  return (
    <>
      <p className='mt-16 text-center text-neutral-400'>File not found</p>
      <Link to='/'>
        <a
          className='w-48 px-4 py-2 m-auto text-center transition-colors duration-75 border-2 border-transparent rounded-md disabled:opacity-50 bg-slate-600 hover:bg-slate-700 text-neutral-200 disabled:bg-neutral-400 disabled:text-neutral-100'
        >
          Back to home
        </a>
      </Link>
    </>
  );
}

export default NotFoundGIF;
