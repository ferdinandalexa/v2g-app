import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import Logo from './Logo';

describe('Logo display text', () => {
  it('Render logo with default values', () => {
    render(<Logo />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('viewBox');
    expect(screen.getByRole('img')).toHaveAttribute('width', '100%');
    expect(screen.getByRole('img')).toHaveAttribute('height', '100%');
  });

  it('Render logo with the provided values', () => {
    const width = '50px';
    const height = '70px';
    render(<Logo width={width} height={height} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('viewBox');
    expect(screen.getByRole('img')).toHaveAttribute('width', width);
    expect(screen.getByRole('img')).toHaveAttribute('height', height);
  });
});
