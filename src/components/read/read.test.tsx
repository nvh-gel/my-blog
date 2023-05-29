import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Read from './read';

describe('<Read />', () => {
  test('it should mount', () => {
    render(<Read />);

    const read = screen.getByTestId('Read');

    expect(read).toBeInTheDocument();
  });
});
