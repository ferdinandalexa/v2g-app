import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import Footer from './Footer';

describe('Footer display text', () => {
  it('Render footer', () => {
    render(<Footer />);

    expect(screen.getByText('Project made by')).toBeInTheDocument();

    expect(screen.getByText('@_ferdinandalexa')).toBeInTheDocument();
    expect(screen.getByText('@_ferdinandalexa')).toHaveAttribute('href');
    expect(screen.getByText('@_ferdinandalexa')).toHaveAttribute('target', '_blank');
    expect(screen.getByText('@_ferdinandalexa')).toHaveAttribute('rel', 'noreferrer noopener');
  });
});
