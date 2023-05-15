import React, { lazy, Suspense } from 'react';

const LazyLocation = lazy(() => import('./location'));

const Location = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLocation {...props} />
  </Suspense>
);

export default Location;
