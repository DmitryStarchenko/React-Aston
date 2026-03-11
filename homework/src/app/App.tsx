import { MainLayout } from '../shared/layouts/MainLayout';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { Header } from '../widgets/LayoutHeader/Header';
import '../shared/styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainLayout />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
