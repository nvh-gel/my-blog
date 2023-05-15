import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Service from './service';

describe('<Service />', () => {
  test('it should mount', () => {
    render(<Service />);

    const service = screen.getByTestId('Service');

    expect(service).toBeInTheDocument();
  });
});
