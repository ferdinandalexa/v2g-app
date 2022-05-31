import { Link } from 'wouter';

import Info from './Info';

function Header () {
  return (
    <header className='flex flex-row items-center justify-between px-6 py-4 text-center rounded-xl bg-neutral-800'>
      <Link to='/'>
        <h1 className='text-lg font-bold cursor-pointer text-neutral-200'>V2G App</h1>
      </Link>
      <Info />
    </header>
  );
}

export default Header;
