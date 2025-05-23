import type { ReactNode } from "react";

interface GamesGridProps {
  children: ReactNode;
}

export default function GamesGrid({ children }: GamesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}
