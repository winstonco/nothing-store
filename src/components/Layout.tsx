import { FC, ReactElement } from 'react';

import Navbar from './Navbar';

type LayoutProps = {
  children: ReactElement;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
