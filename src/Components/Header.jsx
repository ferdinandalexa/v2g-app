import Info from './Info';

function Header () {
  return (
    <header className='px-6 py-4 text-center rounded-xl bg-neutral-800 flex flex-row justify-between items-center'>
      <h1 className='text-lg font-bold text-neutral-200'>V2G App</h1>
      <Info />
    </header>
  );
}

export default Header;
