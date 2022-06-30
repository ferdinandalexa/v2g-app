function splitPath (filename) {
  const regex = /(.*)\.([^/.]+$)/;
  const matches = filename.match(regex, '');

  if (!matches) return { name: filename };

  return { name: matches[1], extension: matches[2] };
}

function changeExtension (filename, newExtension) {
  const { name } = splitPath(filename);
  return `${name}.${newExtension}`;
}

export { changeExtension, splitPath };
