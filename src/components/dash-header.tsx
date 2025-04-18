import { Plus } from "lucide-react";
import SearchInput from "./search-input";

const user = "/assets/images/smavatar.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-3 w-full bg-[#001A26] text-white">
      <div className="ml-4">
        <div className="w-64">
          <SearchInput />
        </div>
      </div>

      {/* btton and user avatar */}
      <div className="flex items-center gap-4 mr-10">
        <button className="flex items-center gap-2 bg-[#2BADE7] hover:bg-[#1A9AD5] text-white px-4 py-2 rounded-full transition-colors">
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
