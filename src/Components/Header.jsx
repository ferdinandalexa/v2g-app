import { Link } from 'wouter';

import Logo from './Logo';
import Info from './Info';

function Header () {
  return (
    <header className='flex flex-row items-center justify-between px-6 py-4 text-center rounded-xl bg-neutral-800'>
      <Link to='/'>
        <a>
          <Logo width='96px' className='transition-opacity cursor-pointer hover:opacity-50' />
        </a>
      </Link>
      <Info />
    </header>
  );
}

export default Header;
