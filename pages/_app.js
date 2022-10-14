import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import DashboardProvider from '../provider/context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  return (
    <>
      <Toaster />
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <DashboardProvider>
        <Component {...pageProps} />
      </DashboardProvider>
    </>
  );
}

export default MyApp;
