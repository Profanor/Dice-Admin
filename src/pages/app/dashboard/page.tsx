import AnalyticsBarChart from "@/components/bar-chart";
import GamesPieChart from "@/components/pie-chart";
import StatCard from "@/components/stat-card";
import WeekSelector from "@/components/week-selector";
import PageHeader from "@/components/page-header";
import { Activity, BookOpen, FileText, Trophy } from "lucide-react";

export default function Overview() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Overview"
          breadcrumbs={[{ label: "Welcome to your dashboard", href: "/" }]}
        />
        <WeekSelector />
      </div>

      {/* stat cards */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value={"100M"}
            label="Total stake"
            icon={<FileText className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="256k"
            label="Total Tournaments"
            icon={<Trophy className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="80"
            label="Total Active Tournaments"
            icon={<Activity className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="157k"
            label="Subscribed Games"
            icon={<BookOpen className="h-5 w-5 text-gray-400" />}
          />
        </div>
      </div>

      {/* section heading */}
      <h2 className="text-xl font-bold mb-6" id="analytics-section">
        Analytics
      </h2>

      {/* charts */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* bar chart - takes available space */}
        <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <AnalyticsBarChart />
        </div>

        {/* pie chart - aligned to right */}
        <div className="w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-4">
          <GamesPieChart />
        </div>
      </div>
    </>
  );
}
