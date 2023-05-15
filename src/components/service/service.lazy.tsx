import React, { lazy, Suspense } from 'react';

const LazyService = lazy(() => import('./service'));

const Service = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyService {...props} />
  </Suspense>
);

export default Service;
