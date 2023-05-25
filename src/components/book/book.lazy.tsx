import React, { lazy, Suspense } from 'react';

const LazyBook = lazy(() => import('./book'));

const Book = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBook {...props} />
  </Suspense>
);

export default Book;
