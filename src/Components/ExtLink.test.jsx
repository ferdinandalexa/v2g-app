import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import ExtLink from './ExtLink';

describe('ExtLink display text', () => {
  it('Should display the default text ', () => {
    const href = 'ferdinandalexa.com';
    render(<ExtLink url={href} />);
    // default text: External link
    expect(screen.getByText('External link')).toHaveAttribute('href', href);
    expect(screen.getByText('External link')).toHaveAttribute('target', '_blank');
    expect(screen.getByText('External link')).toHaveAttribute('rel', 'noreferrer noopener');
    expect(screen.getByText('External link')).toBeInTheDocument();
  });

  it('Should display the provided text ', () => {
    const href = 'ferdinandalexa.com';
    const text = 'Go to other page';
    render(<ExtLink url={href}>{text}</ExtLink>);

    expect(screen.getByText(text)).toHaveAttribute('href', href);
    expect(screen.getByText(text)).toHaveAttribute('target', '_blank');
    expect(screen.getByText(text)).toHaveAttribute('rel', 'noreferrer noopener');
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
