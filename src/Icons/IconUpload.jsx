function IconUpload ({ className, width = '24px', height = '24px' }) {
  return (
    <svg className={className} aria-hidden='true' role='img' width={width} height={height} viewBox='0 0 24 24'>
      <path d='M9 16h6v-6h4l-7-7l-7 7h4v6zm-4 2h14v2H5v-2z' />
    </svg>
  );
}

export default IconUpload;
