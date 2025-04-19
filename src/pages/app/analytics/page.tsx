import AnalyticsBarChart from "@/components/bar-chart";
import PageHeader from "@/components/page-header";
import GamesPieChart from "@/components/pie-chart";
import WeekSelector from "@/components/week-selector";
import Leaderboard from "@/components/leaderboard";

// sample data
const playerData = [
  {
    id: 1,
    position: 1,
    name: "George Jones",
    avatar: "/assets/images/dp.svg",
    currency: "USD" as const,
    amountStaked: 653518,
    wins: 423,
    losses: 566,
    gamesPlayed: 9462,
    frequentlyPlayedGame: "Under/over",
  },
  {
    id: 2,
    position: 2,
    name: "Savannah Nguyen",
    avatar: "/assets/images/dp.svg",
    currency: "HKD" as const,
    amountStaked: 651535,
    wins: 626,
    losses: 536,
    gamesPlayed: 4152,
    frequentlyPlayedGame: "Odd/Even",
  },
  {
    id: 3,
    position: 3,
    name: "Leslie Alexander",
    avatar: "/assets/images/dp.svg",
    currency: "EUR" as const,
    amountStaked: 267400,
    wins: 922,
    losses: 423,
    gamesPlayed: 6065,
    frequentlyPlayedGame: "Single",
  },
  {
    id: 4,
    position: 4,
    name: "Annette Black",
    avatar: "/assets/images/dp.svg",
    currency: "EUR" as const,
    amountStaked: 653518,
    wins: 796,
    losses: 177,
    gamesPlayed: 1784,
    frequentlyPlayedGame: "Colors",
  },
  {
    id: 5,
    position: 5,
    name: "Floyd Miles",
    avatar: "/assets/images/dp.svg",
    currency: "CAD" as const,
    amountStaked: 459003,
    wins: 274,
    losses: 453,
    gamesPlayed: 8561,
    frequentlyPlayedGame: "Lotto",
  },
  {
    id: 6,
    position: 6,
    name: "Devon Lane",
    avatar: "/assets/images/dp.svg",
    currency: "AUD" as const,
    amountStaked: 651535,
    wins: 703,
    losses: 385,
    gamesPlayed: 2798,
    frequentlyPlayedGame: "Tournament",
  },
  {
    id: 7,
    position: 7,
    name: "Robert Fox",
    avatar: "/assets/images/dp.svg",
    currency: "NGN" as const,
    amountStaked: 267400,
    wins: 883,
    losses: 354,
    gamesPlayed: 6690,
    frequentlyPlayedGame: "Mega 10",
  },
];

export default function GameControls() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Analytics"
          breadcrumbs={[{ label: "Welcome to your dashboard", href: "/" }]}
        />
        <WeekSelector />
      </div>

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

      <div className="p-6">
        <Leaderboard
          data={playerData}
          title="Highest bettor on Games played"
          subtitle="Players rankings"
          totalPages={10}
        />
      </div>
    </>
  );
}
