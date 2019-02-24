import React, { Suspense } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';

const Home = () => (
  <GridContent>
    <Suspense fallback={<PageLoading />}>Sample Page</Suspense>
  </GridContent>
);

export default props => <Home {...props} />;
