import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Practice from './practice';

describe('<Practice />', () => {
  test('it should mount', () => {
    render(<Practice />);

    const practice = screen.getByTestId('Practice');

    expect(practice).toBeInTheDocument();
  });
});
