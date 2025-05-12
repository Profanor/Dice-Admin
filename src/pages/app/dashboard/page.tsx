import { useDashboardStats } from "@/api/hooks/dashboard/useDashboardStats";
import AnalyticsBarChart from "@/components/bar-chart";
import GamesPieChart from "@/components/pie-chart";
import StatCard from "@/components/stat-card";
import WeekSelector from "@/components/week-selector";
import PageHeader from "@/components/page-header";

const stake = "/assets/images/stake.svg";
const pad = "/assets/images/pad.svg";
const sub = "/assets/images/sub.svg";
const trophy = "/assets/images/trophy.svg";

export default function Overview() {
  const { data, isLoading, isError } = useDashboardStats();

  if (isLoading) return <p>Loading dashboard data...</p>;
  if (isError || !data) return <p>Failed to load dashboard data.</p>;

  const { summary, charts, barChart } = data;

  // helper to get values from summary
  const getStatValue = (label: string) =>
    summary.find((item) => item.name === label)?.value || "N/A";

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
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value={getStatValue("Total Stake")}
            label="Total stake"
            isSensitive={true}
            icon={<img src={stake} alt="Stake Icon" className="w-10 h-10" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value={getStatValue("Total Tournaments")}
            label="Total Tournaments"
            icon={<img src={trophy} alt="Trophy Icon" className="w-10 h-10" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value={getStatValue("Active Tournaments")}
            label="Total Active Tournaments"
            icon={<img src={pad} alt="Pad Icon" className="w-10 h-10" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value={getStatValue("Subscribed Games")}
            label="Subscribed Games"
            icon={<img src={sub} alt="Sub Icon" className="w-10 h-10" />}
          />
        </div>
      </div>

      {/* section heading */}
      <h2 className="text-xl font-bold mb-6" id="analytics-section">
        Analytics
      </h2>

      {/* charts */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <AnalyticsBarChart
            data={barChart.datasets.map((dataset, index) => ({
              name: barChart.labels[index],
              games: dataset.data[0],
              stakes: dataset.data[1],
              winnings: dataset.data[2],
            }))}
          />
        </div>

        <div className="w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-4">
          <GamesPieChart
            data={charts.map((chart) => ({
              name: chart.group,
              value: chart.data.reduce((sum, item) => sum + item.value, 0),
              color: chart.color || "#000",
            }))}
          />
        </div>
      </div>
    </>
  );
}
