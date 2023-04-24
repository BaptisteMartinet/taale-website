import * as React from 'react';
import { styled } from '@mui/material';
import { HeadFC, PageProps } from 'gatsby';
import { Layout } from 'components/app';

const Container = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <h1>Page not found</h1>
      </Container>
    </Layout>
  )
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
