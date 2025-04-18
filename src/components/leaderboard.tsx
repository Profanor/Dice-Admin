"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { PlayerData } from "@/types/player";
import PlayerRow from "@/components/player-row";

interface LeaderboardProps {
  data: PlayerData[];
  title: string;
  subtitle?: string;
  totalPages?: number;
}

export default function Leaderboard({
  data,
  title,
  subtitle,
  totalPages = 10,
}: LeaderboardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  //   const [selectedGame, setSelectedGame] = useState<string | null>(null);
  //   const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
  //     null
  //   );
  //   const [timeFilter, setTimeFilter] = useState<string>("This week");

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredData = data;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap gap-2 mt-3 sm:mt-0">
          <button className="flex items-center gap-1 bg-[#2BADE7] text-white px-3 py-1.5 rounded-full text-sm">
            All games
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 bg-[#2BADE7] text-white px-3 py-1.5 rounded-full text-sm">
            By currency
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 bg-[#2BADE7] text-white px-3 py-1.5 rounded-full text-sm">
            This week
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-2 text-left text-sm font-medium text-black w-12">
                S/N
              </th>
              <th className="py-3 px-2 text-left text-sm font-medium text-black">
                Name
              </th>
              <th className="py-3 px-2 text-left text-sm font-medium text-black">
                Total amount staked
              </th>
              <th className="py-3 px-2 text-left text-sm font-medium text-black">
                Wins
              </th>
              <th className="py-3 px-2 text-left text-sm font-medium text-black">
                Losses
              </th>
              <th className="py-3 px-2 text-left text-sm font-medium text-black">
                Games played
              </th>
              <th className="py-3 px-2 text-left text-sm font-medium text-black">
                Frequently played games
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((player) => (
              <PlayerRow key={player.id} player={player} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm rounded-md ${
            currentPage === 1
              ? "text-gray-400"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm rounded-md ${
            currentPage === totalPages
              ? "text-gray-400"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
