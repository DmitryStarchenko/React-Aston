import { MainLayout } from '../shared/layouts/MainLayout';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { Header } from '../widgets/LayoutHeader/Header';
import '../shared/styles/theme.css';
import { Modal } from '../shared/ui/Modal/Modal';
import { ModalProvider } from '../shared/lib/modal/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <ThemeProvider>
        <Header />
        <MainLayout />
        <Footer />
        <Modal />
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
