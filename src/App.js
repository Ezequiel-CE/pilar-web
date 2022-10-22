import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routes from './pages/routes';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './lib/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}
export default App;
