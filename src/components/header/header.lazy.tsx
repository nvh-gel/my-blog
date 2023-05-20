import React, { lazy, Suspense } from "react";
import { MenuProps } from "./header";

const LazyHeader = lazy(() => import("./header"));

const Header = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & {
    items: MenuProps[];
  }
) => (
  <Suspense fallback={null}>
    <LazyHeader {...props} />
  </Suspense>
);

export default Header;
