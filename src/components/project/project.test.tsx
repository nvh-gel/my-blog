import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from './project';

describe('<Project />', () => {
  test('it should mount', () => {
    render(<Project />);

    const project = screen.getByTestId('Project');

    expect(project).toBeInTheDocument();
  });
});
