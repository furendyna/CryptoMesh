// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoMesh/i);
    expect(titleElement).toBeInTheDocument();
});
