import PageHeader from "@/components/page-header";
import StatCard from "@/components/stat-card";
import WeekSelector from "@/components/week-selector";

const stake = "/assets/images/stake.svg";
const pad = "/assets/images/pad.svg";
const sub = "/assets/images/sub.svg";
const trophy = "/assets/images/trophy.svg";

export default function GameControls() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Manage Dice Single"
          breadcrumbs={[{ label: "Games", href: "/" }, { label: "Singles" }]}
          onAction={() => console.log("Request game clicked")}
        />
        <WeekSelector />
      </div>

      {/* stat cards */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value={"225"}
            label="Total Games Played"
            icon={<img src={stake} alt="Stake Icon" className="w-8 h-8" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="256k"
            label="Total Stake"
            icon={<img src={trophy} alt="Trophy Icon" className="w-8 h-8" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="8.19M"
            label="Total Winnings"
            icon={<img src={pad} alt="Pad Icon" className="w-8 h-8" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="492.63K"
            label="Profits"
            icon={<img src={sub} alt="Subscription Icon" className="w-8 h-8" />}
          />
        </div>
      </div>
    </>
  );
}
