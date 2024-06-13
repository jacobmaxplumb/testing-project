import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('component renders and title is on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/todo list/i);
  expect(linkElement).toBeInTheDocument();
});

test('can type in input and update the value of it', async () => {
  render(<App />);
  const input = screen.getByTestId('input');
  await userEvent.type(input, 'hello');
  expect(input).toHaveValue('hello');
})

test('can add items into my todo list', async () => {
  render(<App />);
  const input = screen.getByTestId('input');
  const button = screen.getByText(/add/i);
  await userEvent.type(input, 'hello');
  await userEvent.click(button);
  await userEvent.type(input, 'goodbye');
  await userEvent.click(button);
  const liHello = screen.getByText(/hello/i);
  const liGoodbye = screen.getByText(/goodbye/i);
  expect(liHello).toBeInTheDocument();
  expect(liGoodbye).toBeInTheDocument();
})