import React, { lazy, Suspense } from "react";
import NewsData from "../../interface/news";

const LazyNews = lazy(() => import("./news"));

const News = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & {
    news: NewsData[];
  }
) => (
  <Suspense fallback={null}>
    <LazyNews {...props}/>
  </Suspense>
);

export default News;
