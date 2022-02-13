import { render, screen } from '@testing-library/react';
import App from '../App';

test('hi', () => {
  render(<App />);
  const linkElement = screen.getByText(/hi/i);
  expect(linkElement).toBeInTheDocument();
});
