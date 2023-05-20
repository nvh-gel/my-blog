import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Programming from './programming';

describe('<Programming />', () => {
  test('it should mount', () => {
    render(<Programming />);

    const programming = screen.getByTestId('Programming');

    expect(programming).toBeInTheDocument();
  });
});
