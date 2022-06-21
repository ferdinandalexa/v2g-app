import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import Header from './Header';

describe('Header display text', () => {
  it('Render header', () => {
    render(<Header />);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(screen.getByRole('link')).toContainHTML('svg');
  });
});
