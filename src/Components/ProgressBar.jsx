import { useEffect, useState } from 'react';

function ProgressBar ({ done }) {
  const [style, setStyle] = useState({
    width: 0
  });

  useEffect(() => {
    setStyle({
      width: `${done}%`
    });
  }, [done]);

  return (
    <div className='w-full text-neutral-200 bg-neutral-700 rounded-full overflow-hidden'>
      <span className='text-center block from-rose-500 p-1 transition-all to-rose-600 bg-gradient-to-r' style={style}>{done}%</span>
    </div>
  );
}

export default ProgressBar;
