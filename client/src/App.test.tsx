import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders that there is no data yet when the application starts', () => {
  render(<App />);
  const linkElement = screen.getByText(/No data to show yet/i);
  expect(linkElement).toBeInTheDocument();
});
