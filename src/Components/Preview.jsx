import { useContext, useEffect, useState } from 'react';
import { Link, useRoute } from 'wouter';

import DownloadGIF from './DownloadGIF';
import NotFoundGIF from './NotFoundGIF';

import FilesContext from '../Context/FilesContext';

function Preview () {
  const [image, setImage] = useState();
  const { files } = useContext(FilesContext);
  const [, params] = useRoute('/preview/:id');

  useEffect(() => {
    if (!image) {
      setImage(...files.filter(file => file.uuid === params.id));
    }
  }, [image]);

  return (
    <>
      {
       image && <Link to='/'><a className='inline-block mt-4 mb-1 ml-4 text-base transition-colors text-neutral-500 hover:text-neutral-400'>← Back to home</a></Link>
      }
      <main className='flex flex-col gap-4 my-4'>
        {
        !image
          ? <NotFoundGIF />
          : <DownloadGIF gif={image.gif} name={image.name} />
        }
      </main>
    </>
  );
}

export default Preview;
