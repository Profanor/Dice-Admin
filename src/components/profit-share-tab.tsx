import { useState } from "react";

export default function ProfitShareTab() {
  const [agentPercent, setAgentPercent] = useState(0);
  const [userPercent, setUserPercent] = useState(0);

  const totalProfit = 100 - agentPercent - userPercent;

  const handleSave = () => {
    console.log("Saving:", { agentPercent, userPercent });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Agent Percentage</label>
          <input
            type="number"
            value={agentPercent}
            onChange={(e) => setAgentPercent(Number(e.target.value))}
            className="w-full border border-gray-100 rounded-md px-3 py-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">User Percentage</label>
          <input
            type="number"
            value={userPercent}
            onChange={(e) => setUserPercent(Number(e.target.value))}
            className="w-full border border-gray-100 rounded-md px-3 py-2"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSave}
            className="bg-[#2BADE7] cursor-pointer flex justify-center items-center text-white rounded-full px-6 py-2"
          >
            Save changes
          </button>
        </div>
      </div>

      {/* Chart Card */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">Your Profit</h3>
        <div className="relative w-28 h-28 mb-4">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              className="text-gray-200"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-blue-500"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${totalProfit}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            {totalProfit}%
          </div>
        </div>

        <div className="w-full bg-[#F9FAFB] rounded-lg p-4 text-sm mt-4">
          <div className="flex justify-between mb-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full text-[#25324F]"></span>
              Provider’s profit
            </span>
            <span>{agentPercent}%</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              Smartvirtual’s profit
            </span>
            <span>{userPercent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
