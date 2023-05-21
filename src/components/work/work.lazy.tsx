import React, { lazy, Suspense } from "react";
import WorkData from "../../interface/work";

const LazyWork = lazy(() => import("./work"));

const Work = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & {
    works: WorkData[];
  }
) => (
  <Suspense fallback={null}>
    <LazyWork {...props} />
  </Suspense>
);

export default Work;
