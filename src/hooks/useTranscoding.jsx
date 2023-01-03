import { fetchFile } from '@ffmpeg/ffmpeg';
import { useContext, useEffect, useState } from 'react';

import ProcessContext from '../Context/ProcessContext';
import useFFMPEG from './useFFmpeg';

import useGif from './useGif';

const process = {
  pending: 'Pending',
  loading: 'Loading',
  transcoding: 'Transcoding',
  done: 'Done'
};

function useTranscoding () {
  const { ffmpeg } = useFFMPEG();
  const { setProcessing, setCurrentUuid } = useContext(ProcessContext);

  const { setGif } = useGif();

  const [status, setStatus] = useState(process.pending);
  const [transcodedFile, setTrascodedFile] = useState({});
  const [progress, setProgress] = useState(0);

  const restartStates = () => {
    setProcessing(false);
    setCurrentUuid();
    setStatus(process.pending);
  };

  const stopTranscoding = () => {
    ffmpeg.exit();
    restartStates();
  };

  useEffect(() => {
    if (status === process.done) {
      setGif(transcodedFile);
      restartStates();
    }
  }, [status]);

  async function doTranscode (uuid, filename, objectURL) {
    setProcessing(true);
    setCurrentUuid(uuid);

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0.01) {
        setProgress(ratio);
      } else {
        setStatus(process.transcoding);
        setProgress(0);
      }

      if (ratio >= 1) {
        setTrascodedFile(ffmpeg.FS('readFile', 'image.gif'));
        setStatus(process.done);
      }
    });

    const fileBinaryData = await fetchFile(objectURL);

    ffmpeg.FS('writeFile', filename, fileBinaryData);
    await ffmpeg.run('-i', filename, 'image.gif');
  }

  return { doTranscode, stopTranscoding, progress, status };
}

export default useTranscoding;
