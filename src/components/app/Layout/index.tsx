import type { PropsWithChildren } from 'react';

import * as React from 'react';
import { styled } from '@mui/material';
import { Header, Footer } from 'components/app';
import './layout.css';

const Main = styled('main')({
  minHeight: '100vh',
});

const Layout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
