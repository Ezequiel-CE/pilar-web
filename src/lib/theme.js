import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#7D6ED0',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#303030',
    },
  },
};

export const theme = createTheme(themeOptions);
