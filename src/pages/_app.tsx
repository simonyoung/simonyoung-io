import type { AppProps /*, AppContext */ } from 'next/app'
import Layout from 'components/Layout';
import 'styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
