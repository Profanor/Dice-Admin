import { useState } from "react";
import TabNavigation from "@/components/tab-navigation";
import AccountTab from "@/components/account-tab";
import ProfitsTab from "@/components/profits-tab";
import PasswordTab from "@/components/password-tab";
import ProfitShareTab from "@/components/profit-share-tab";
import WebHookTab from "@/components/web-hook";
import ThemeSettings from "@/components/theme-settings";

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

  // API call
  const userData = {
    photo: "/placeholder.svg?height=100&width=100",
    companyName: "Hollywood Bets",
    email: "hollywoodbets-demo@yopmail.com",
    mobile: "080123456789",
    clientId: "r1pNmwfn",
    apiKey: "SV.live1741693483164iKY1F0kE2MTLY5AY",
    encryptionKey: "••••••••••••••••••••••",
  };

  const handleSaveChanges = () => {
    console.log("Saving changes...");
  };

  // render the appropriate tab content based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountTab userData={userData} onSave={handleSaveChanges} />;
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
        return <AccountTab userData={userData} onSave={handleSaveChanges} />;
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
