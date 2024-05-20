import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
          <CssBaseline />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
