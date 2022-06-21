function DisplayGIF ({ gif, name = 'image' }) {
  return (
    <>
      <img src={gif} alt={`GIF from ${name}`} className='object-contain px-1 max-h-96 sm:max-h-80' />
      {name && <p className='text-center text-neutral-400'>{name}.gif</p>}
    </>
  );
}

export default DisplayGIF;
