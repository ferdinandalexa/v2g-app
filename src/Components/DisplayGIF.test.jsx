import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import DisplayGIF from './DisplayGIF';

describe('Download display text', () => {
  it('Should display the default attributes value ', () => {
    const href = 'ferdinandalexa.com';
    render(<DisplayGIF gif={href} />);
    expect(screen.getByAltText('GIF from image')).toBeInTheDocument();
    expect(screen.getByAltText('GIF from image')).toHaveAttribute('src', href);

    // default text: image.gif
    expect(screen.getByText('image.gif')).toBeInTheDocument();
  });

  it('Should render the provided attributes ', () => {
    const href = 'ferdinandalexa.com';
    const filename = 'mygif';
    render(<DisplayGIF gif={href} name={filename} />);

    expect(screen.getByAltText(`GIF from ${filename}`)).toBeInTheDocument();
    expect(screen.getByAltText(`GIF from ${filename}`)).toHaveAttribute('src', href);

    expect(screen.getByText(`${filename}.gif`)).toBeInTheDocument();
  });
});
