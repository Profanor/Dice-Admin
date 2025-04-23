import localforage from "localforage";
import { FC, Suspense, lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppLayout = lazy(() => import("./AppLayout"));

const Spinner = () => (
  <div className="flex items-center justify-center h-screen bg-[#001A26]">
    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppLayoutLazy: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await localforage.getItem("access_token");
      console.log(token);
      if (token) {
        navigate("/");
      } else {
        navigate("/auth/login");
      }
    };

    checkAuth();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <AppLayout />
    </Suspense>
  );
};

export default AppLayoutLazy;
