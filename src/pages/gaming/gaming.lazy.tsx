import React, { lazy, Suspense } from 'react';

const LazyGaming = lazy(() => import('./gaming'));

const Gaming = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGaming {...props} />
  </Suspense>
);

export default Gaming;
