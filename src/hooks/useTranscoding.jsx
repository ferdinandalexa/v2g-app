import { useContext, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import TranscodeContext from '../Context/TranscodeContext';

const ffmpeg = createFFmpeg({
  corePath: '/static/ffmpeg-core.js'
});

function useTranscoding () {
  const { setProcessing, setCurrentUuid } = useContext(TranscodeContext);
  const [status, setStatus] = useState('Pending');
  const [transcodedFile, setTrascodedFile] = useState({});
  const [progress, setProgress] = useState(0);

  async function doTranscode (uuid, filename, objectURL) {
    if (!ffmpeg.isLoaded()) {
      setStatus('Loading');
      await ffmpeg.load();
    }

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0) {
        setProgress(ratio);
        setStatus('Transcoding');
      } else {
        setProgress(0);
        setProcessing(true);
        setCurrentUuid(uuid);
      }
    });

    const fileBinaryData = await fetchFile(objectURL);
    ffmpeg.FS('writeFile', filename, fileBinaryData);
    await ffmpeg.run('-i', filename, 'image.gif');
    setStatus('Done');
    setProcessing(false);
    setCurrentUuid();
    setProgress(0);
    setTrascodedFile(ffmpeg.FS('readFile', 'image.gif'));
  }

  return [transcodedFile, doTranscode, progress, status];
}

export default useTranscoding;
