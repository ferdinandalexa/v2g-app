function IconDelete ({ className, width = '24px', height = '24px' }) {
  return (
    <svg className={className} aria-hidden='true' role='img' width={width} height={height} viewBox='-0.4 0 15 15' preserveAspectRatio='xMidYMid meet'>
      <path d='M12 13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3.5a.5.5 0 0 0 1 0V3h9v9H8.5a.5.5 0 0 0 0 1H12ZM9 6.5v3a.5.5 0 0 1-1 0V7.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 7H5.5a.5.5 0 0 1 0-1h3a.498.498 0 0 1 .5.497' />
    </svg>
  );
}

export default IconDelete;
