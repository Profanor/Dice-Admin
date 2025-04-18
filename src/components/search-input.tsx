import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-full">
      {" "}
      {/* increased width */}
      <input
        type="text"
        placeholder="Search..."
        className="text-black pr-10 pl-4 py-2 w-full rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:border-transparent"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
}
