import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';

export const root = document.getElementById('root');
if (root instanceof HTMLElement) createRoot(root).render(<App />);
