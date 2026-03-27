import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { Router } from './provider/router/Router';
import { Provider } from 'react-redux';
import { store } from './provider/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
