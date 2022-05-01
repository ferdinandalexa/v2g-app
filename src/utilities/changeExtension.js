function changeExtension (filename, newExtension) {
  return filename.replace(/\.[^/.]+$/, `${newExtension}`);
}

export default changeExtension;
