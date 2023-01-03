import { createFFmpeg } from '@ffmpeg/ffmpeg';
import { useState } from 'react';

const ffmpegCoreURL = new URL('/js/ffmpeg-core.js', import.meta.url).href;
const ffmpeg = createFFmpeg({
  corePath: ffmpegCoreURL
});

function useFFmpeg () {
  const [isFFmpegLoaded, setFFmpegLoad] = useState(false);

  const loadFFmpeg = async () => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
      setFFmpegLoad(ffmpeg.isLoaded());
    }
  };

  const stopFFmpeg = async () => {
    ffmpeg.exit();
    setFFmpegLoad(ffmpeg.isLoaded());
    await loadFFmpeg();
  };

  return { loadFFmpeg, stopFFmpeg, ffmpeg, isFFmpegLoaded };
}

export default useFFmpeg;
