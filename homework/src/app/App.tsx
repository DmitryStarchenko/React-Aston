import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { Router } from './provider/router/Router';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
