import React, { lazy, Suspense } from 'react';

const LazyQuote = lazy(() => import('./quote'));

const Quote = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyQuote {...props} />
  </Suspense>
);

export default Quote;
