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

// const data = [
//   { name: "Mon", games: 300, stakes: 200, winnings: 100 },
//   { name: "Tue", games: 350, stakes: 250, winnings: 150 },
//   { name: "Wed", games: 280, stakes: 220, winnings: 120 },
//   { name: "Thu", games: 320, stakes: 240, winnings: 130 },
//   { name: "Fri", games: 280, stakes: 200, winnings: 100 },
//   { name: "Sat", games: 330, stakes: 260, winnings: 140 },
//   { name: "Today", games: 400, stakes: 300, winnings: 200 },
// ];

interface AnalyticsBarChartProps {
  data: {
    name: string;
    games: number;
    stakes: number;
    winnings: number;
  }[];
}

export default function AnalyticsBarChart({ data }: AnalyticsBarChartProps) {
  const [activeDataKeys, setActiveDataKeys] = useState({
    games: true,
    stakes: true,
    winnings: true,
  });

  // colors for the bars based on active state
  const barColors = {
    games: activeDataKeys.games ? "#2BADE7" : "#333333", // blue when active, Black when inactive
    stakes: "#FDE68A", // yellow always
    winnings: activeDataKeys.winnings ? "#333333" : "#2BADE7", // black when active, Blue when inactive
  };

  // colors for the legend circles
  const legendColors = {
    games: "#333333", // black for Games played
    stakes: "#FDE68A", // yellow for Active stakes
    winnings: "#2BADE7", // blue for Winnings
  };

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
              className={`w-3 h-3 rounded-full cursor-pointer ${
                !activeDataKeys.games ? "opacity-60" : ""
              }`}
              style={{ backgroundColor: legendColors.games }}
              onClick={() => toggleDataKey("games")}
            ></div>
            <span className="text-xs">Games played</span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full cursor-pointer ${
                !activeDataKeys.stakes ? "opacity-60" : ""
              }`}
              style={{ backgroundColor: legendColors.stakes }}
              onClick={() => toggleDataKey("stakes")}
            ></div>
            <span className="text-xs">Active stakes</span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full cursor-pointer ${
                !activeDataKeys.winnings ? "opacity-60" : ""
              }`}
              style={{ backgroundColor: legendColors.winnings }}
              onClick={() => toggleDataKey("winnings")}
            ></div>
            <span className="text-xs">Winnings</span>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full rounded-2xl shadow-lg bg-white p-4 border border-gray-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            barGap={2}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              dy={10}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => (value === 0 ? "0" : `${value}k`)}
              // ticks={[0, 200, 300, 500, 600]}
              domain={[0, 600]}
              tick={{ fontSize: 12 }}
              minTickGap={20}
              dx={-10}
            />
            <Tooltip
              formatter={(value) => [`${value}k`, ""]}
              itemStyle={{ padding: "2px 0" }}
              contentStyle={{
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                padding: "8px",
              }}
            />
            {activeDataKeys.games && (
              <Bar
                dataKey="games"
                stackId="a"
                fill={barColors.games}
                radius={[4, 4, 0, 0]}
                barSize={20}
                isAnimationActive={false}
                style={{ filter: "none" }}
              />
            )}
            {activeDataKeys.stakes && (
              <Bar
                dataKey="stakes"
                stackId="a"
                fill={barColors.stakes}
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
            )}
            {activeDataKeys.winnings && (
              <Bar
                dataKey="winnings"
                stackId="a"
                fill={barColors.winnings}
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
