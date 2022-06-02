import { useContext, useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import FilesContext from '../Context/FilesContext';
import ProcessContext from '../Context/ProcessContext';

const ffmpeg = createFFmpeg({
  corePath: '/js/ffmpeg-core.js'
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
      setProgress(0);
      setStatus('Pending');
    }
  }, [status]);

  async function doTranscode (uuid, filename, objectURL) {
    if (!ffmpeg.isLoaded()) {
      setStatus('Loading');
      await ffmpeg.load();
      setProcessing(true);
    }

    setProcessing(true);
    setCurrentUuid(uuid);

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0.01) {
        setProgress(ratio);
        setStatus('Transcoding');
      } else {
        setProgress(0);
      }

      if (ratio >= 1) {
        setTrascodedFile(ffmpeg.FS('readFile', 'image.gif'));
        setStatus('Done');
      }
    });

    const fileBinaryData = await fetchFile(objectURL);

    ffmpeg.FS('writeFile', filename, fileBinaryData);
    await ffmpeg.run('-i', filename, 'image.gif');
  }

  async function transcodeAllFiles () {
    for (const { uuid, name, extension, dataURL, gif } of files) {
      if (!gif) await doTranscode(uuid, `${name}.${extension}`, dataURL);
    }
  }

  return { transcodedFile, doTranscode, transcodeAllFiles, progress, status };
}

export default useTranscoding;
