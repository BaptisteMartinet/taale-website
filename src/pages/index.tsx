import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Header } from '../components/app';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <h1>Home</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
