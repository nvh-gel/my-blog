import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Guideline from './guideline';

describe('<Guildline />', () => {
  test('it should mount', () => {
    render(<Guideline />);

    const guildline = screen.getByTestId('Guildline');

    expect(guildline).toBeInTheDocument();
  });
});
