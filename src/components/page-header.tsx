import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  actionLabel?: string;
  onAction?: () => void;
}

export default function PageHeader({
  title,
  breadcrumbs,
  actionLabel,
  onAction,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center text-sm text-gray-500 mt-1">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">{">"}</span>}
                {item.href ? (
                  <Link to={item.href} className="hover:text-[#2BADE7]">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {actionLabel && (
        <button
          onClick={onAction}
          className="flex items-center gap-2 bg-[#2BADE7] hover:bg-[#1A9AD5] text-white px-4 py-2 rounded-full transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>{actionLabel}</span>
        </button>
      )}
    </div>
  );
}
