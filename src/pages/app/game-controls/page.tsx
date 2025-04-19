import PageHeader from "@/components/page-header";
import StatCard from "@/components/stat-card";
import WeekSelector from "@/components/week-selector";
import { FileText, Trophy, Activity, BookOpen } from "lucide-react";

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
            icon={<FileText className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="256k"
            label="Total Stake"
            icon={<Trophy className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="8.19M"
            label="Total Winnings"
            icon={<Activity className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex-1 min-w-[200px]">
          <StatCard
            value="492.63K"
            label="Profits"
            icon={<BookOpen className="h-5 w-5 text-gray-400" />}
          />
        </div>
      </div>
    </>
  );
}
