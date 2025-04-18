interface GameCardProps {
  title: string;
  tag?: {
    text: string;
  };
  backgroundImage: string;
  onClick?: () => void;
}

export default function GameCard({
  // title,
  backgroundImage,
  onClick,
}: GameCardProps) {
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer transition-transform"
      onClick={onClick}
    >
      <div className="relative w-full h-60 p-1 flex flex-col justify-between">
        <img
          src={`/assets/images/${backgroundImage}`}
          alt="Background"
          className="w-full h-full object-contain"
        />
        <div className="flex items-center mt-auto">
          <div className="w-10 h-10 mr-3"></div>
        </div>
      </div>
    </div>
  );
}
