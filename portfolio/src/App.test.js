import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Gourav./i });
  expect(linkElement).toBeInTheDocument();
});
