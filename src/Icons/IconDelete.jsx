function IconDelete ({ className, width = '24px', height = '24px' }) {
  return (
    <svg className={className} aria-hidden='true' role='img' width={width} height={height} viewBox='0 0 24 24'>
      <path d='M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z' />
    </svg>
  );
}

export default IconDelete;
