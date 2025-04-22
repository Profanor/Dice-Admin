import React from "react";

interface GameCardProps {
  id: string;
  name: string;
  percentageProfit: number;
  onChange: (id: string, value: number) => void;
}

const GameCardProfitPercent: React.FC<GameCardProps> = ({
  id,
  name,
  percentageProfit,
  onChange,
}) => {
  return (
    <div className="bg-white w-full max-w-md rounded-xl border border-gray-200 p-4">
      <h3 className="text-center text-[#383A44] font-medium mb-4">{name}</h3>
      <div>
        <label
          htmlFor={`profit-${id}`}
          className="block text-sm text-[#C1C2C5] mb-2"
        >
          Percentage Profit
        </label>
        <input
          id={`profit-${id}`}
          type="number"
          min="0"
          max="100"
          value={percentageProfit}
          onChange={(e) => onChange(id, Number.parseInt(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
        />
      </div>
    </div>
  );
};

export default GameCardProfitPercent;
