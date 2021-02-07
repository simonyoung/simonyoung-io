import React, { Fragment } from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import PageHead from 'components/PageHead';
import { Layout } from 'components/Layout';
import { SITE_NAME, SITE_URL } from 'lib/constants';

import 'styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <PageHead />
      <DefaultSeo
        titleTemplate={`%s | ${SITE_NAME}`}
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: SITE_URL,
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
