import { MenuItemType } from "antd/es/menu/hooks/useItems";
import React, { lazy, Suspense } from "react";

const LazyHeader = lazy(() => import("./header"));

const Header = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & {
    items: MenuItemType[];
  }
) => (
  <Suspense fallback={null}>
    <LazyHeader {...props} />
  </Suspense>
);

export default Header;
