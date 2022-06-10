import { useContext, useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import ProcessContext from '../Context/ProcessContext';

import useGif from './useGif';

const ffmpeg = createFFmpeg({
  corePath: '/js/ffmpeg-core.js'
});

const PROCESS_DONE = 'Done';

function useTranscoding () {
  const { setProcessing, setCurrentUuid } = useContext(ProcessContext);

  const { setGif } = useGif();

  const [status, setStatus] = useState('Pending');
  const [transcodedFile, setTrascodedFile] = useState({});
  const [progress, setProgress] = useState(0);

  const restartStates = () => {
    setProcessing(false);
    setCurrentUuid();
    setProgress(0);
    setStatus('Pending');
  };

  useEffect(() => {
    if (status === PROCESS_DONE) {
      setGif(transcodedFile);
      restartStates();
    }
  }, [status]);

  async function doTranscode (uuid, filename, objectURL) {
    if (!ffmpeg.isLoaded()) {
      setStatus('Loading');
      await ffmpeg.load();
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

  return { transcodedFile, doTranscode, progress, status };
}

export default useTranscoding;
