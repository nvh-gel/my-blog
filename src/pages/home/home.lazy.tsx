import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./home'));

const Home = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHome {...props} />
  </Suspense>
);

export default Home;
