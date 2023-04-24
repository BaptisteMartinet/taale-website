import type { PropsWithChildren } from 'react';

import * as React from 'react';
import { Header, Footer } from 'components/app';
import './layout.css';

const Layout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
