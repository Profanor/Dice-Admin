import Sidebar from "@/components/sidebar";
import Header from "@/components/dash-header";
import StatCard from "@/components/stat-card";
import AnalyticsBarChart from "@/components/bar-chart";
import GamesPieChart from "@/components/pie-chart";
import { FileText, Trophy, Activity, BookOpen } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold">Overview</h2>
                <p className="text-sm text-gray-500">
                  Welcome to your dashboard.
                </p>
              </div>

              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm transition-colors">
                <span>This week</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                value="100M"
                label="Total stake"
                icon={<FileText className="h-5 w-5 text-gray-400" />}
              />

              <StatCard
                value="256k"
                label="Total Tournaments"
                icon={<Trophy className="h-5 w-5 text-gray-400" />}
              />

              <StatCard
                value="80"
                label="Total Active Tournaments"
                icon={<Activity className="h-5 w-5 text-gray-400" />}
              />

              <StatCard
                value="157k"
                label="Subscribed Games"
                icon={<BookOpen className="h-5 w-5 text-gray-400" />}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Analytics</h2>
              <AnalyticsBarChart />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <GamesPieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
