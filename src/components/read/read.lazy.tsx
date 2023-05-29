import React, { lazy, Suspense } from 'react';

const LazyRead = lazy(() => import('./read'));

const Read = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRead {...props} />
  </Suspense>
);

export default Read;
