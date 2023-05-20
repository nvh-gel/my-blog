import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reading from './reading';

describe('<Reading />', () => {
  test('it should mount', () => {
    render(<Reading />);

    const reading = screen.getByTestId('Reading');

    expect(reading).toBeInTheDocument();
  });
});
