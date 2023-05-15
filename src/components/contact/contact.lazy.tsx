import React, { lazy, Suspense } from 'react';

const LazyContact = lazy(() => import('./contact'));

const Contact = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContact {...props} />
  </Suspense>
);

export default Contact;
