import FilesUploader from './FilesUploader';
import FilesList from './FilesList';

function Body () {
  return (
    <main className='flex flex-col gap-4 my-4'>
      <FilesUploader />
      <FilesList />
    </main>
  );
}

export default Body;
