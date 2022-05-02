import { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({
  corePath: './node_modules/@ffmpeg/core/dist/ffmpeg-core.js'
});

function useTranscoding () {
  const [status, setStatus] = useState('Pending');
  const [transcodedFile, setTrascodedFile] = useState({});
  const [progress, setProgress] = useState(0);

  async function doTranscode (filename, objectURL) {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
      setStatus('Loading');
    }

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0) {
        setProgress(ratio);
        setStatus('Transcoding');
      } else { setProgress(0); }
    });

    const fileBinaryData = await fetchFile(objectURL);
    ffmpeg.FS('writeFile', filename, fileBinaryData);
    await ffmpeg.run('-i', filename, 'image.gif');
    setStatus('Done');
    setTrascodedFile(ffmpeg.FS('readFile', 'image.gif'));
  }

  return [transcodedFile, doTranscode, progress, status];
}

export default useTranscoding;
