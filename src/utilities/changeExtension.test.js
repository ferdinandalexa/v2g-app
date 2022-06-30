import { describe, expect, it } from 'vitest';
import { changeExtension, splitPath } from './changeExtension';

describe('Change extension', () => {
  it('Received filename with extension', () => {
    const fileWithExtension = 'image.png';
    expect(changeExtension(fileWithExtension, 'gif')).toBeTypeOf('string');
    expect(changeExtension(fileWithExtension, 'gif')).eq('image.gif');
  });

  it('Received filename without extension', () => {
    const fileWithoutExtension = 'image';
    expect(changeExtension(fileWithoutExtension, 'gif')).toBeTypeOf('string');
    expect(changeExtension(fileWithoutExtension, 'gif')).eq('image.gif');
  });
});

describe('Split path', () => {
  it('splitPath with extension', () => {
    const fileWithExtension = 'image.png';
    expect(splitPath(fileWithExtension)).toBeTypeOf('object');
    expect(splitPath(fileWithExtension)).toMatchObject({
      name: 'image',
      extension: 'png'
    });
  });

  it('splitPath without extension', () => {
    const fileWithoutExtension = 'image';
    expect(splitPath(fileWithoutExtension)).toBeTypeOf('object');
    expect(splitPath(fileWithoutExtension)).toMatchObject({
      name: 'image'
    });
  });
});
