import { fetchFile } from '@ffmpeg/ffmpeg';
import { useContext, useState, useEffect } from 'react';

import ProcessContext from '../Context/ProcessContext';
import useFFMPEG from './useFFmpeg';

import useGif from './useGif';

const process = {
  pending: 'Pending',
  transcoding: 'Transcoding',
  done: 'Done'
};

function useTranscoding () {
  const { ffmpeg } = useFFMPEG();
  const { setCurrentUuid } = useContext(ProcessContext);

  const { setGif } = useGif();

  const [status, setStatus] = useState(process.pending);
  const [progress, setProgress] = useState(0);

  const restartStates = () => {
    setCurrentUuid();
    setStatus(process.pending);
  };

  const stopTranscoding = () => {
    ffmpeg.exit();
    restartStates();
  };

  useEffect(() => {
    if (status === process.done) {
      setGif(ffmpeg.FS('readFile', 'image.gif'));
      restartStates();
    }
  }, [status]);

  async function doTranscode (uuid, filename, objectURL) {
    setCurrentUuid(uuid);

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0.01) {
        setProgress(ratio);
      } else {
        setStatus(process.transcoding);
        setProgress(0);
      }

      if (ratio >= 1) { setStatus(process.done); }
    });

    const fileBinaryData = await fetchFile(objectURL);

    ffmpeg.FS('writeFile', filename, fileBinaryData);
    await ffmpeg.run('-i', filename, 'image.gif');
  }

  return { doTranscode, stopTranscoding, progress, status };
}

export default useTranscoding;
