import { useContext, useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import FilesContext from '../Context/FilesContext';
import ProcessContext from '../Context/ProcessContext';

const ffmpeg = createFFmpeg({
  corePath: '/static/ffmpeg-core.js'
});

const PROCESS_DONE = 'Done';

function useTranscoding () {
  const { files, setFiles } = useContext(FilesContext);
  const { setProcessing, currentUuid, setCurrentUuid } = useContext(ProcessContext);
  const [status, setStatus] = useState('Pending');
  const [transcodedFile, setTrascodedFile] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === PROCESS_DONE) {
      const blobGIF = new Blob([transcodedFile.buffer], { type: 'image/gif' });
      const urlBloblGIF = URL.createObjectURL(blobGIF);
      const upadatedFiles = files.map(file => {
        return file.uuid === currentUuid
          ? Object.assign(file, { gif: urlBloblGIF })
          : file;
      });
      setFiles(upadatedFiles);
      setProcessing(false);
      setCurrentUuid();
      setStatus('Pending');
      setProgress(0);
    }
  }, [status]);

  async function doTranscode (uuid, filename, objectURL) {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
      setStatus('Loading');
    }

    setCurrentUuid(uuid);
    setProcessing(true);

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0.01) {
        setProgress(ratio);
        setStatus('Transcoding');
      } else {
        setProgress(0);
      }
    });

    const fileBinaryData = await fetchFile(objectURL);
    ffmpeg.FS('writeFile', filename, fileBinaryData);
    await ffmpeg.run('-i', filename, 'image.gif');
    setStatus('Done');
    setTrascodedFile(ffmpeg.FS('readFile', 'image.gif'));
  }

  return { transcodedFile, doTranscode, progress, status };
}

export default useTranscoding;
