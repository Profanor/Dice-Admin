import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Calendar } from "lucide-react";

const data = [
  { name: "Mon", games: 300, stakes: 200, winnings: 100 },
  { name: "Tue", games: 350, stakes: 250, winnings: 150 },
  { name: "Wed", games: 280, stakes: 220, winnings: 120 },
  { name: "Thu", games: 320, stakes: 240, winnings: 130 },
  { name: "Fri", games: 280, stakes: 200, winnings: 100 },
  { name: "Sat", games: 330, stakes: 260, winnings: 140 },
  { name: "Today", games: 400, stakes: 300, winnings: 200 },
];

export default function AnalyticsBarChart() {
  const [activeDataKeys, setActiveDataKeys] = useState({
    games: true,
    stakes: true,
    winnings: true,
  });

  const toggleDataKey = (key: keyof typeof activeDataKeys) => {
    setActiveDataKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium">March, 2025</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full bg-blue-400 cursor-pointer ${
                !activeDataKeys.games ? "opacity-30" : ""
              }`}
              onClick={() => toggleDataKey("games")}
            ></div>
            <span className="text-xs">Games played</span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full bg-yellow-400 cursor-pointer ${
                !activeDataKeys.stakes ? "opacity-30" : ""
              }`}
              onClick={() => toggleDataKey("stakes")}
            ></div>
            <span className="text-xs">Active stakes</span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full bg-orange-400 cursor-pointer ${
                !activeDataKeys.winnings ? "opacity-30" : ""
              }`}
              onClick={() => toggleDataKey("winnings")}
            ></div>
            <span className="text-xs">Winnings</span>
          </div>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => (value === 0 ? "0" : `${value}k`)}
              ticks={[0, 200, 300, 400, 500, 600]}
            />
            <Tooltip />
            {activeDataKeys.games && (
              <Bar
                dataKey="games"
                stackId="a"
                fill="#93C5FD"
                radius={[4, 4, 0, 0]}
              />
            )}
            {activeDataKeys.stakes && (
              <Bar
                dataKey="stakes"
                stackId="a"
                fill="#FDE68A"
                radius={[4, 4, 0, 0]}
              />
            )}
            {activeDataKeys.winnings && (
              <Bar
                dataKey="winnings"
                stackId="a"
                fill="#FDBA74"
                radius={[4, 4, 0, 0]}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
