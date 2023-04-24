import type { HeadFC, PageProps } from 'gatsby';

import * as React from 'react';
import { Layout } from 'components/app';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      landing page
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Taale</title>;
