import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import 'styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
