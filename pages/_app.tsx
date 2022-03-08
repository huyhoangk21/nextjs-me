import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { DarkModeProvider } from '../hooks/useDarkMode';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <DefaultSeo titleTemplate='Hoang Le | %s' defaultTitle='Hoang Le' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}

export default MyApp;
