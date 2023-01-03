import { fetchFile } from '@ffmpeg/ffmpeg';
import { useContext, useState, useEffect } from 'react';

import ProcessContext from '../Context/ProcessContext';
import useFFMPEG from './useFFmpeg';

import { process } from '../utilities/processDict';

import useGif from './useGif';

function useTranscoding () {
  const { ffmpeg, stopFFmpeg } = useFFMPEG();
  const { setCurrentUuid } = useContext(ProcessContext);

  const { setGif } = useGif();

  const [status, setStatus] = useState(process.pending);
  const [progress, setProgress] = useState(0);

  const restartStates = () => {
    setCurrentUuid();
    setStatus(process.pending);
  };

  const stopTranscoding = () => {
    restartStates();
    stopFFmpeg();
  };

  useEffect(() => {
    if (status === process.done) {
      setGif(ffmpeg.FS('readFile', 'image.gif'));
      restartStates();
    }
  }, [status]);

  async function doTranscode (uuid, filename, objectURL) {
    setCurrentUuid(uuid);
    setStatus(process.transcoding);

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0.01) {
        setProgress(ratio);
      } else {
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
