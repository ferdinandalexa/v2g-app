import Download from './Download';
import DisplayGIF from './DisplayGIF';

function DownloadGIF ({ gif, name }) {
  return (
    <>
      <DisplayGIF gif={gif} name={name} />
      <Download file={gif} filename={`${name}.gif`} type='image/gif' className='w-full m-auto mb-2 sm:w-72'>
        Download GIF
      </Download>
    </>
  );
}

export default DownloadGIF;
