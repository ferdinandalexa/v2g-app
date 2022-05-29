function changeExtension (filename, newExtension) {
  return filename.replace(/\.[^/.]+$/, `${newExtension}`);
}

function splitPath (filename) {
  const regex = /(.*)\.([^/.]+$)/;
  const matches = filename.match(regex, '');

  return { name: matches[1], extension: matches[2] };
}

export { changeExtension, splitPath };
