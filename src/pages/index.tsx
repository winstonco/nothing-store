import type { ReactElement } from 'react';

import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <h1 className="text-3xl font-bold underline">Hello World!</h1>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
