import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import DownloadGIF from './DownloadGIF';

describe('Download display text', () => {
  it('Should display the default attributes value', () => {
    const href = 'ferdinandalexa.com';
    render(<DownloadGIF gif={href} />);

    expect(screen.getByText('Download GIF')).toBeInTheDocument();
    expect(screen.getByText('Download GIF')).toHaveAttribute('href', href);
    expect(screen.getByText('Download GIF')).toHaveAttribute('download', 'image.gif');
    expect(screen.getByText('Download GIF')).toHaveAttribute('type', 'image/gif');

    expect(screen.getByAltText('GIF from image')).toBeInTheDocument();
    expect(screen.getByAltText('GIF from image')).toHaveAttribute('src', href);

    expect(screen.getByText('image.gif')).toBeInTheDocument();
  });

  it('Should render the provided attributes value', () => {
    const href = 'ferdinandalexa.com';
    const filename = 'mygif';
    render(<DownloadGIF gif={href} name={filename} />);

    expect(screen.getByText('Download GIF')).toBeInTheDocument();
    expect(screen.getByText('Download GIF')).toHaveAttribute('href', href);
    expect(screen.getByText('Download GIF')).toHaveAttribute('download', `${filename}.gif`);
    expect(screen.getByText('Download GIF')).toHaveAttribute('type', 'image/gif');

    expect(screen.getByAltText(`GIF from ${filename}`)).toBeInTheDocument();
    expect(screen.getByAltText(`GIF from ${filename}`)).toHaveAttribute('src', href);

    expect(screen.getByText(`${filename}.gif`)).toBeInTheDocument();
  });
});
