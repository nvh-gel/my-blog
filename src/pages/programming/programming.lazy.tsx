import React, { lazy, Suspense } from 'react';

const LazyProgramming = lazy(() => import('./programming'));

const Programming = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProgramming {...props} />
  </Suspense>
);

export default Programming;
