'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#9F6AE5',
      '300': '#B78AF2',
      '700': '#7843BF',
    },
    secondary: {
      main: '#B78AF2',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 14,
    subtitle1: {
      fontSize: 14,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
});

export default theme;
