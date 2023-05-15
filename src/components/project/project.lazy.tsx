import React, { lazy, Suspense } from 'react';

const LazyProject = lazy(() => import('./project'));

const Project = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProject {...props} />
  </Suspense>
);

export default Project;
