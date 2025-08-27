// pages/_app.js
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        primaryColor: 'blue',
      }}
    >
      <Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
}