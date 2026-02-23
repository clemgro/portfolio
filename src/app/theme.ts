import { createTheme } from '@mui/material/styles';
import CoolveticaRg from '../assets/fonts/Coolvetica Rg.woff2';
import CoolveticaCram from '../assets/fonts/Coolvetica Rg Cram.woff2';
import BebasNeue from '../assets/fonts/BebasNeue-Regular.woff2';

export const theme = createTheme({
  palette: {
    primary: { main: '#0B1215', light: '#F5F2ED' },
    secondary: { main: '#F5F2ED', light: '#0B1215' },
    background: { default: '#F5F2ED', paper: '#0b1215' }
  },
  typography: {
    fontFamily: 'BebasNeue, CoolveticaCram, sans-serif',
    fontSize: 14,
    fontWeightRegular: 100,
    h1: { fontFamily: 'BebasNeue, sans-serif', fontSize: '2em' },
    h2: { fontFamily: 'CoolveticaCram, sans-serif', fontSize: '1em' },
    body1: { fontFamily: 'CoolveticaRg, sans-serif' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'CoolveticaRg';
          font-style: normal;
          font-display: swap;
          src: local('CoolveticaRg'), url(${CoolveticaRg}) format('woff2');
        }
        @font-face {
          font-family: 'CoolveticaCram';
          font-style: normal;
          font-display: swap;
          src: local('CoolveticaCram'), url(${CoolveticaCram}) format('woff2');
        }
        @font-face {
          font-family: 'BebasNeue';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: local('BebasNeue'), url(${BebasNeue}) format('woff2');
        }
      `,
    },
  },
});
