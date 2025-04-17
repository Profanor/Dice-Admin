import type { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon: ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">{value}</h3>
          {icon}
        </div>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}
