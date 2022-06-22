import { describe, expect, it } from 'vitest';
import { render, screen } from '../utilities/test-utils';
import Transcode from '../Containers/Transcode';
import Preview from './Preview';

describe('Preview component', () => {
  it('Render preview gif component', () => {
    const preview = render(
      <Transcode>
        <Preview />
      </Transcode>
    );

    console.log(preview);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
