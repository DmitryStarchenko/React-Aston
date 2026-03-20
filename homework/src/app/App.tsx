import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { Header } from '../widgets/LayoutHeader/Header';
import { Router } from './provider/router/Router';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Router />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
