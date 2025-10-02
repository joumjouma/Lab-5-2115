import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  const greetingLink = screen.getByText(/greeting/i);
  const aboutLink = screen.getByText(/about/i);
  expect(homeLink).toBeInTheDocument();
  expect(greetingLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
