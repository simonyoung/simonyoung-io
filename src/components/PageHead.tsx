import React from 'react';
import Head from 'next/head';
import { SITE_URL } from 'lib/constants';

export default function PageHead(): JSX.Element {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="hsla(231, 15%, 18%, 1)" />
      <link type="text/plain" rel="author" href={`${SITE_URL}/humans.txt`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/assets/icon/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/assets/icon/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/assets/icon/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/assets/icon/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/assets/icon/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/assets/icon/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/assets/icon/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/assets/icon/apple-touch-icon-152x152.png"
      />
      <link rel="icon" type="image/png" href="/assets/icon/favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="/assets/icon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/assets/icon/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/assets/icon/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/assets/icon/favicon-128.png" sizes="128x128" />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#272935" />
      <meta name="msapplication-TileImage" content="mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
    </Head>
  );
}
