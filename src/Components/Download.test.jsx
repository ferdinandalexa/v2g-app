import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import Download from './Download';

describe('Download display text', () => {
  it('Should display the default attributes value ', () => {
    const href = 'ferdinandalexa.com';
    render(<Download file={href} />);
    // default text: Download
    expect(screen.getByText('Download')).toBeInTheDocument();
    expect(screen.getByText('Download')).toHaveAttribute('href', href);
    expect(screen.getByText('Download')).toHaveAttribute('download', 'image.gif');
    expect(screen.getByText('Download')).not.toHaveAttribute('type');
  });

  it('Should render the provided attributes ', () => {
    const href = 'ferdinandalexa.com';
    const text = 'Download gif';
    const filename = 'mygif.gif';
    const type = 'image/gif';
    render(<Download file={href} filename={filename} type={type}>{text}</Download>);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveAttribute('href', href);
    expect(screen.getByText(text)).toHaveAttribute('download', filename);
    expect(screen.getByText(text)).toHaveAttribute('type', type);
  });
});
