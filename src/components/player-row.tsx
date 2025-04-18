import type { PlayerData } from "@/types/player";

interface PlayerRowProps {
  player: PlayerData;
}

const gold = "/assets/images/star.svg";
const silver = "/assets/images/silver.svg";
const bronze = "/assets/images/bronze.svg";

export default function PlayerRow({ player }: PlayerRowProps) {
  // function to render rank badge based on position
  const renderRankBadge = (position: number) => {
    if (position === 1) {
      return (
        <div className="flex items-center justify-center w-6 h-6">
          <img src={gold} alt="Gold Medal" className="w-6 h-6" />
        </div>
      );
    } else if (position === 2) {
      return (
        <div className="flex items-center justify-center w-6 h-6">
          <img src={silver} alt="Gold Medal" className="w-6 h-6" />
        </div>
      );
    } else if (position === 3) {
      return (
        <div className="flex items-center justify-center w-6 h-6">
          <img src={bronze} alt="Gold Medal" className="w-6 h-6" />
        </div>
      );
    } else {
      return <span className="text-gray-500">{position}</span>;
    }
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-2 text-center">
        {renderRankBadge(player.position)}
      </td>
      <td className="py-3 px-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <img
              src={player.avatar}
              alt={player.name}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="font-medium">{player.name}</span>
        </div>
      </td>
      <td className="py-3 px-2 font-medium">
        {player.currency} {player.amountStaked.toLocaleString()}
      </td>
      <td className="py-3 px-2">
        <span className="text-green-500">{player.wins.toLocaleString()}</span>
      </td>
      <td className="py-3 px-2">
        <span className="text-red-500">{player.losses.toLocaleString()}</span>
      </td>
      <td className="py-3 px-2">{player.gamesPlayed.toLocaleString()}</td>
      <td className="py-3 px-2">{player.frequentlyPlayedGame}</td>
    </tr>
  );
}
