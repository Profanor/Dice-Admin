import { ReactNode, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface StatCardProps {
  value: string;
  label: string;
  icon: ReactNode;
  isSensitive?: boolean;
}

export default function StatCard({
  value,
  label,
  icon,
  isSensitive = false,
}: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-2xl font-bold">
            {isSensitive && !isVisible ? "****" : value}
            {/* hide the value by default if sensitive */}
          </h3>
          {icon && <div className="ml-auto">{icon}</div>}{" "}
        </div>
        <div className="flex items-center mt-4">
          <p className="text-sm">{label}</p>
        </div>
        {isSensitive && (
          <button onClick={toggleVisibility} className="text-gray-500 mt-2">
            {isVisible ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
