import { Routes, Route } from "react-router-dom";
import AppLayoutLazy from "@/pages/app/layout";
import Login from "@/pages/app/auth/page";
import GameManagement from "@/pages/app/game-management/page";
import Overview from "@/pages/app/dashboard/page";
import GameControls from "@/pages/app/game-controls/page";
import AnalyticsPage from "@/pages/app/analytics/page";
import SettingsPage from "@/pages/app/settings/page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<AppLayoutLazy />}>
        <Route index element={<Overview />} />
        <Route path="management" element={<GameManagement />} />
        <Route path="controls" element={<GameControls />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
