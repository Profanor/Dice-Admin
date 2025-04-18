import { FC, Suspense, lazy } from "react";

const AppLayout = lazy(() => import("./AppLayout"));

const Spinner = () => (
  <div className="flex items-center justify-center h-screen bg-[#001A26]">
    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppLayoutLazy: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <AppLayout />
    </Suspense>
  );
};

export default AppLayoutLazy;
