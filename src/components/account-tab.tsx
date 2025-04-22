"use client";

import { Mail } from "lucide-react";
import ProfileSection from "@/components/profile-upload";
import FormField from "@/components/form-field";
import SectionHeader from "@/components/section-header";

interface AccountTabProps {
  userData: {
    photo: string;
    companyName: string;
    email: string;
    mobile: string;
    clientId: string;
    apiKey: string;
    encryptionKey: string;
  };
  onSave: () => void;
}

export default function AccountTab({ userData, onSave }: AccountTabProps) {
  return (
    <>
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
          onClick={onSave}
          className="px-4 py-2 bg-[#2BADE7] text-white rounded-full hover:bg-[#1A9AD5] transition-colors"
        >
          Save changes
        </button>
      </div>
    </>
  );
}
