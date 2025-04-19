import { useState } from "react";
import TabNavigation from "@/components/tab-navigation";
import ProfileSection from "@/components/profile-upload";
import FormField from "@/components/form-field";
import SectionHeader from "@/components/section-header";
import { Mail } from "lucide-react";

const tabs = [
  { id: "account", label: "My Account details" },
  { id: "profits", label: "Game profits" },
  { id: "share", label: "Profits share" },
  { id: "password", label: "Change password" },
  { id: "webhook", label: "Webhook" },
  { id: "theme", label: "Theme settings" },
  { id: "api", label: "API" },
];

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState("account");

  //  API call
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="bg-white rounded-lg p-6">
        <SectionHeader
          title="Personal info"
          description="Update your photo and personal details here."
        />

        <div className="mb-8">
          <ProfileSection initialImage={userData.photo} />
        </div>

        <FormField label="Company name" htmlFor="companyName">
          <input
            id="companyName"
            type="text"
            defaultValue={userData.companyName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
          />
        </FormField>

        <FormField label="Email address" htmlFor="email">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              defaultValue={userData.email}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
            />
          </div>
        </FormField>

        <FormField label="Mobile number" htmlFor="mobile">
          <input
            id="mobile"
            type="tel"
            defaultValue={userData.mobile}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
          />
        </FormField>

        <FormField label="Client ID" htmlFor="clientId">
          <input
            id="clientId"
            type="text"
            defaultValue={userData.clientId}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
            readOnly
          />
        </FormField>

        <FormField label="API KEY" htmlFor="apiKey">
          <input
            id="apiKey"
            type="text"
            defaultValue={userData.apiKey}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
            readOnly
          />
        </FormField>

        <FormField label="Encryption Key" htmlFor="encryptionKey">
          <input
            id="encryptionKey"
            type="password"
            defaultValue={userData.encryptionKey}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
            readOnly
          />
        </FormField>

        <div className="flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-4 py-2 bg-[#2BADE7] text-white rounded-full hover:bg-[#1A9AD5] transition-colors"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
