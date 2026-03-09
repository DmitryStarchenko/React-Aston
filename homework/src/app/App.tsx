import { MainLayout } from "../shared/layouts/MainLayout";
import { Footer } from "../widgets/LayoutFooter/Footer";
import { Header } from "../widgets/LayoutHeader/Header";

function App() {
  return (
    <>
      <Header />
      <MainLayout />
      <Footer />
    </>
  );
}

export default App;
