import React, { lazy, Suspense } from "react";

const LazyPractice = lazy(() => import("./practice"));

const Practice = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyPractice {...props} />
  </Suspense>
);

export default Practice;
