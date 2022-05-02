import { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({
  corePath: './node_modules/@ffmpeg/core/dist/ffmpeg-core.js'
});

function useTranscoding () {
  const [transcodedFile, setTrascodedFile] = useState({});
  const [progress, setProgress] = useState(0);

  async function doTranscode (filename, objectURL) {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    ffmpeg.setProgress(({ ratio }) => {
      ratio <= 0 ? setProgress(0) : setProgress(ratio);
    });

    const fileBinaryData = await fetchFile(objectURL);
    ffmpeg.FS('writeFile', filename, fileBinaryData);
    await ffmpeg.run('-i', filename, 'image.gif');
    setTrascodedFile(ffmpeg.FS('readFile', 'image.gif'));
  }

  return [transcodedFile, doTranscode, progress];
}

export default useTranscoding;
