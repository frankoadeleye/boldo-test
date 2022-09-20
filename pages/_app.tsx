/* eslint-disable react/no-unescaped-entities */
import { ThemeProvider } from "styled-components";
import GlobalStyles from "utils/constants/global-style";
import Theme from "utils/constants/theme";
import Head from "next/head";
import { AppProps } from "next/app";

function Main({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Head>
          <title>Boldo </title>
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />

          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Manrope:wght@400&display=swap');
          </style>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Main Component={Component} pageProps={pageProps} />
    </>
  );
}

export default MyApp;
