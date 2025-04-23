import AnalyticsPage from "@/pages/app/analytics/page";
import Login from "@/pages/app/auth/page";
import Overview from "@/pages/app/dashboard/page";
import GameControls from "@/pages/app/game-controls/page";
import GameManagement from "@/pages/app/game-management/page";
import AppLayoutLazy from "@/pages/app/layout";
import SettingsPage from "@/pages/app/settings/page";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/" element={<AppLayoutLazy />}>
        <Route index element={<Overview />} />
        <Route path="management" element={<GameManagement />} />
        <Route path="controls" element={<GameControls />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
