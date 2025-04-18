import { Plus } from "lucide-react";
import SearchInput from "./search-input";

const user = "/assets/images/smavatar.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 sm:px-8 py-3 w-full bg-[#001A26] text-white gap-4 overflow-x-auto whitespace-nowrap">
      {/* search input */}
      <div className="min-w-0 flex-shrink">
        <div className="w-48 sm:w-64">
          <SearchInput />
        </div>
      </div>

      {/* button and user avatar */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="flex items-center gap-2 bg-[#2BADE7] hover:bg-[#1A9AD5] text-white px-4 py-2 rounded-full transition-colors whitespace-nowrap text-sm">
          <Plus className="h-4 w-4" />
          <span>Create new Tournament</span>
        </button>

        <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
          <img src={user} alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
