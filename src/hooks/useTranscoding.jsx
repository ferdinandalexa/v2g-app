import { useContext, useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import ProcessContext from '../Context/ProcessContext';

import useGif from './useGif';

const ffmpeg = createFFmpeg({
  corePath: '/js/ffmpeg-core.js'
});

const process = {
  pending: 'Pending',
  loading: 'Loading',
  transcoding: 'Transcoding',
  done: 'Done'
};

function useTranscoding () {
  const { setProcessing, setCurrentUuid } = useContext(ProcessContext);

  const { setGif } = useGif();

  const [status, setStatus] = useState(process.pending);
  const [transcodedFile, setTrascodedFile] = useState({});
  const [progress, setProgress] = useState(0);

  const restartStates = () => {
    setProcessing(false);
    setStatus(process.pending);
  };

  useEffect(() => {
    if (status === process.done) {
      setGif(transcodedFile);
      restartStates();
    }
  }, [status]);

  async function doTranscode (uuid, filename, objectURL) {
    if (!ffmpeg.isLoaded()) {
      setStatus(process.loading);
      await ffmpeg.load();
    }

    setProcessing(true);
    setCurrentUuid(uuid);

    ffmpeg.setProgress(({ ratio }) => {
      if (ratio > 0.01) {
        setProgress(ratio);
        setStatus(process.transcoding);
      } else {
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

  return { transcodedFile, doTranscode, progress, status };
}

export default useTranscoding;
