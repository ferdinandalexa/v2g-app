import { createFFmpeg } from '@ffmpeg/ffmpeg';

const ffmpegCoreURL = new URL('/js/ffmpeg-core.js', import.meta.url).href;
const ffmpeg = createFFmpeg({
  corePath: ffmpegCoreURL
});

function useFFmpeg () {
  const loadFFmpeg = async () => {
    if (!ffmpeg.isLoaded()) { await ffmpeg.load(); }
  };

  return { loadFFmpeg, ffmpeg };
}

export default useFFmpeg;
