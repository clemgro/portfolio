import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#0e0e0e', paper: '#161616'}
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
  },
  shape: {    borderRadius: 12}
});
