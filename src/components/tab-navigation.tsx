import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  href?: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onChange?: (tabId: string) => void;
}

export default function TabNavigation({
  tabs,
  activeTab,
  onChange,
}: TabNavigationProps) {
  const handleTabClick = (tabId: string) => {
    if (onChange) {
      onChange(tabId);
    }
  };

  return (
    <div className="flex gap-x-2 border-b border-gray-200 mb-6 overflow-x-auto pb-2">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        const commonClasses = cn(
          "cursor-pointer flex-shrink-0 px-4 py-2 text-sm font-medium rounded-md transition-colors",
          isActive
            ? "bg-[#2BADE7] text-white"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        );

        return tab.href ? (
          <Link key={tab.id} to={tab.href} className={commonClasses}>
            {tab.label}
          </Link>
        ) : (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={commonClasses}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
