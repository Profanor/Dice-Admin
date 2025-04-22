import { useState } from "react";
import GameCardProfitPercent from "@/components/game-card-percentage-profit";

interface GameSetting {
  id: string;
  name: string;
  percentageProfit: number;
}

export default function ProfitsTab() {
  const [gameSettings, setGameSettings] = useState<GameSetting[]>([
    { id: "color", name: "Color Game Settings", percentageProfit: 3 },
    { id: "under-over", name: "Under-over Game Settings", percentageProfit: 3 },
    { id: "single", name: "Single Game Settings", percentageProfit: 3 },
    { id: "odd-even", name: "Odd-Even Game Settings", percentageProfit: 3 },
    { id: "mega10", name: "Mega 10 Game Settings", percentageProfit: 3 },
    { id: "lotto", name: "Lotto Game Settings", percentageProfit: 3 },
  ]);

  const handleProfitChange = (id: string, value: number) => {
    setGameSettings(
      gameSettings.map((game) =>
        game.id === id ? { ...game, percentageProfit: value } : game
      )
    );
  };

  const handleSaveChanges = () => {
    console.log("Saving game profit settings:", gameSettings);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {gameSettings.map((game) => (
          <GameCardProfitPercent
            key={game.id}
            id={game.id}
            name={game.name}
            percentageProfit={game.percentageProfit}
            onChange={handleProfitChange}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSaveChanges}
          className="px-4 py-2 bg-[#2BADE7] text-white rounded-full hover:bg-[#1A9AD5] transition-colors"
        >
          Save changes
        </button>
      </div>
    </>
  );
}
