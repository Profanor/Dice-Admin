import type React from "react";
import { useState } from "react";
import {
  LayoutDashboard,
  GamepadIcon,
  Gamepad2Icon,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const logo = "/assets/images/logo.svg";
const user = "/assets/images/smavatar.svg";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-colors ${
      active ? "bg-[#2BADE7] text-white" : "text-white/80 hover:bg-sky-700/50"
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <GamepadIcon size={20} />, label: "Game management" },
    { icon: <Gamepad2Icon size={20} />, label: "Games & Controls" },
    { icon: <BarChart3 size={20} />, label: "Analytics" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#001A26] w-[220px] min-w-[220px] py-4">
      <div className="px-6 py-4">
        <div className="text-white font-bold text-xl">
          <img src={logo} alt="Logo" className="object-contain h-full" />
        </div>
      </div>

      <div className="flex-1 px-2 py-2 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>

      <div className="mt-auto px-2 py-2">
        <NavItem
          icon={<LogOut size={20} />}
          label="Log out"
          onClick={() => console.log("Log out")}
        />
      </div>

      <div className="border-t border-white/10 mt-2 pt-2 px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img src={user} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs font-medium">Olivia Rhye</span>
            <span className="text-white/60 text-xs">olivia@untitledui.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
