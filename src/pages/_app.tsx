import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

// import checkEnvVars from '@/checkEnvVars';
// checkEnvVars();
import checkConfigs from '@/_config';
checkConfigs();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return <Layout>{page}</Layout>;
    });

  return getLayout(<Component {...pageProps} />);
}
