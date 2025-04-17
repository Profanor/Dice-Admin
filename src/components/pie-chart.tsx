import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { MoreVertical } from "lucide-react";

const data = [
  { name: "Color Games", value: 25, color: "#F97316" },
  { name: "Under/Over Games", value: 15, color: "#EF4444" },
  { name: "Mega10 Games", value: 10, color: "#8B5CF6" },
  { name: "Lotto Games", value: 20, color: "#06B6D4" },
  { name: "Odds/even Games", value: 15, color: "#FBBF24" },
  { name: "Single Games", value: 15, color: "#3B82F6" },
];

const renderCustomizedLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-xs">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function GamesPieChart() {
  return (
    <div className="w-full flex flex-col">
      <div className="relative mb-4">
        <h3 className="text-lg font-semibold text-center">Most played Games</h3>
        <button
          className="absolute right-0 top-1 text-gray-500 hover:text-gray-700"
          title="More options"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2">
        {renderCustomizedLegend({
          payload: data.map((item) => ({
            value: item.name,
            color: item.color,
          })),
        })}
      </div>
    </div>
  );
}
