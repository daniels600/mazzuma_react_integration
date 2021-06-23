import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('sender contact number working', () => {
  render(<App />);
  const senderNumber = screen.getByPlaceholderText("Enter sender's number");
  expect(senderNumber).toBeInTheDocument();
});

test('recipient contact number working', () => {
  render(<App />);
  const recieverNumber = screen.getByPlaceholderText("Enter recipient's number");
  expect(recieverNumber).toBeInTheDocument();
});

test('send button clickable', () => {
  render(<App />);
  const btnElement = screen.getByTestId("send-button");
  userEvent.click(btnElement);
  expect(btnElement).toHaveTextContent(/send/i);
});

