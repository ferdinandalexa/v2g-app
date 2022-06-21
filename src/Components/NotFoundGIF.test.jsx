import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import NotFoundGIF from './NotFoundGIF';

describe('NotFoundGIF render component', () => {
  it('Render NotFoundGIF', () => {
    render(<NotFoundGIF />);

    expect(screen.getByText('File not found')).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Back to home')).toBeInTheDocument();
    expect(screen.getByText('Back to home')).toHaveAttribute('href', '/');
  });
});
