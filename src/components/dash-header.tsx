import { Search, Plus } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 w-full">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create new Tournament</span>
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
