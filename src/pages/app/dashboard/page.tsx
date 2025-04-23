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
            value={"100M"}
            label="Total stake"
            isSensitive={true}
            icon={<img src={stake} alt="Stake Icon" className="w-10 h-10" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="256k"
            label="Total Tournaments"
            icon={<img src={trophy} alt="Trophy Icon" className="w-10 h-10" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="80"
            label="Total Active Tournaments"
            icon={<img src={pad} alt="Pad Icon" className="w-10 h-10" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="157k"
            label="Subscribed Games"
            icon={
              <img src={sub} alt="Subscription Icon" className="w-10 h-10" />
            }
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
