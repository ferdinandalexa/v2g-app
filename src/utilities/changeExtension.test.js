import { describe, expect, it } from 'vitest';
import { changeExtension } from './changeExtension';

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
