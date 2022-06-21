import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '../utilities/test-utils';
import Button from './Button';

describe('Button display text', () => {
  it('Should display the default text ', () => {
    render(<Button />);
    // default text: Click me
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('Should display the provided text ', () => {
    const text = 'Convert file';
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

describe('Button enabled/disabled state', () => {
  it('Button enabled ', () => {
    const text = 'Convert file';
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).not.toHaveAttribute('disabled');
  });

  it('Button disabled', () => {
    const text = 'Convert file';
    render(<Button disabled>{text}</Button>);
    expect(screen.getByText(text)).toHaveAttribute('disabled');
  });
});

describe('Button onclick event', () => {
  it('Button enabled: trigger click event', async () => {
    const text = 'Convert file';
    const mockClick = vi.fn();

    render(<Button onClick={mockClick}>{text}</Button>);
    expect(mockClick).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button'));
    expect(mockClick).toHaveBeenCalled();
  });

  it('Button disabled: it can not trigger click event', async () => {
    const text = 'Convert file';
    const mockClick = vi.fn();

    render(<Button onClick={mockClick} disabled>{text}</Button>);
    expect(mockClick).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button'));
    expect(mockClick).not.toHaveBeenCalled();
  });
});
