import PageHeader from "@/components/page-header";
import GameCard from "@/components/game-card";
import GamesGrid from "@/components/games-grid";

// API mockdata with individual background images for each game
const games = [
  {
    id: 1,
    title: "Tournament",
    tag: { text: "Big wins", variant: "yellow" as const },
    backgroundImage: "frame1.svg",
  },
  {
    id: 2,
    title: "Turbo Dice",
    tag: { text: "Hot", variant: "orange" as const },
    backgroundImage: "frame1.svg",
  },
  {
    id: 3,
    title: "Single",
    tag: { text: "Fast", variant: "green" as const },
    backgroundImage: "frame1.svg",
  },
  {
    id: 4,
    title: "Under/Over",
    tag: undefined,
    backgroundImage: "frame1.svg",
  },
  { id: 5, title: "Colors", tag: undefined, backgroundImage: "frame1.svg" },
  {
    id: 6,
    title: "Calenda",
    tag: { text: "Exclusive", variant: "exclusive" as const },
    backgroundImage: "frame1.svg",
  },
  { id: 7, title: "Lotto", tag: undefined, backgroundImage: "frame1.svg" },
  {
    id: 8,
    title: "Mega 10",
    tag: { text: "Star", variant: "blue" as const },
    backgroundImage: "frame1.svg",
  },
  {
    id: 9,
    title: "Scratch",
    tag: { text: "New", variant: "green" as const },
    backgroundImage: "frame1.svg",
  },
  {
    id: 10,
    title: "Odds / Even",
    tag: undefined,
    backgroundImage: "frame1.svg",
  },
];

export default function GameManagement() {
  const handleRequestGame = () => {
    console.log("Request game clicked");
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Manage Games"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard/management" },
          { label: "Games management" },
        ]}
        actionLabel="Request game"
        onAction={handleRequestGame}
      />

      <GamesGrid>
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            tag={game.tag}
            backgroundImage={game.backgroundImage}
            onClick={() => console.log(`Clicked on ${game.title}`)}
          />
        ))}
      </GamesGrid>
    </div>
  );
}
