import Link from 'next/link';
import { ReactElement } from 'react';

import Layout from '@/components/layout';

const FeaturedLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Layout>
      <>
        <h1>
          <Link href={'/featured'}>Featured Items</Link>
        </h1>
        <ul>
          <li>
            <Link href={'/featured/seasonal'}>Seasonal Items</Link>
          </li>
          <li>
            <Link href={'/featured/new'}>New</Link>
          </li>
        </ul>
        {children}
      </>
    </Layout>
  );
};

export default FeaturedLayout;
