import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from './quote';

describe('<Quote />', () => {
  test('it should mount', () => {
    render(<Quote />);

    const quote = screen.getByTestId('Quote');

    expect(quote).toBeInTheDocument();
  });
});
