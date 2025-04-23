import AccountTab from "@/components/account-tab";
import PasswordTab from "@/components/password-tab";
import ProfitShareTab from "@/components/profit-share-tab";
import ProfitsTab from "@/components/profits-tab";
import TabNavigation from "@/components/tab-navigation";
import ThemeSettings from "@/components/theme-settings";
import WebHookTab from "@/components/web-hook";
import { useState } from "react";

const tabs = [
  { id: "account", label: "My Account details" },
  { id: "profits", label: "Game profits" },
  { id: "share", label: "Profits share" },
  { id: "password", label: "Change password" },
  { id: "webhook", label: "Webhook" },
  { id: "theme", label: "Theme settings" },
  { id: "api", label: "API" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

  const handleSaveChanges = () => {
    console.log("Saving changes...");
  };

  // render the appropriate tab content based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountTab onSave={handleSaveChanges} />;
      case "profits":
        return <ProfitsTab />;
      case "share":
        return <ProfitShareTab />;
      case "password":
        return <PasswordTab />;
      case "webhook":
        return <WebHookTab />;
      case "theme":
        return <ThemeSettings />;
      case "api":
        return <div>API content goes here</div>;
      default:
        return <AccountTab onSave={handleSaveChanges} />;
    }
  };

  return (
    <div className="w-full px-6 lg:px-12 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="rounded-lg p-6">{renderTabContent()}</div>
    </div>
  );
}
