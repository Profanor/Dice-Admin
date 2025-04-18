import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Header from "@/components/dash-header";

export default function AppLayout() {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-[#001A26]">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 pt-6 px-6 pb-0 overflow-y-auto">
          <div className="bg-white rounded-tl-3xl rounded-tr-3xl h-full overflow-y-auto p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
