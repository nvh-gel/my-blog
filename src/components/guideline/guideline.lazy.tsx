import React, { lazy, Suspense } from 'react';

const LazyGuildline = lazy(() => import('./guideline'));

const Guildline = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGuildline {...props} />
  </Suspense>
);

export default Guildline;
