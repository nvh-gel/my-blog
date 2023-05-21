import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Work from './work';

describe('<Work />', () => {
  test('it should mount', () => {
    render(<Work works={[]}/>);

    const work = screen.getByTestId('Work');

    expect(work).toBeInTheDocument();
  });
});
