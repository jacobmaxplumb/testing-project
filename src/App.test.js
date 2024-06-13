import { render, screen } from '@testing-library/react';
import App from './App';

test('component renders and title is on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/todo list/i);
  expect(linkElement).toBeInTheDocument();
});
