import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gaming from './gaming';

describe('<Gaming />', () => {
  test('it should mount', () => {
    render(<Gaming />);

    const gaming = screen.getByTestId('Gaming');

    expect(gaming).toBeInTheDocument();
  });
});
