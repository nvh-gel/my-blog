import React, { lazy, Suspense } from 'react';

const LazyReading = lazy(() => import('./reading'));

const Reading = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReading {...props} />
  </Suspense>
);

export default Reading;
