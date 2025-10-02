import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByRole('link', { name: /home/i });
  const greetingLink = screen.getByRole('link', { name: /greeting/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  expect(homeLink).toBeInTheDocument();
  expect(greetingLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
