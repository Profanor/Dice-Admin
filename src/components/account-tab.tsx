"use client";

import FormField from "@/components/form-field";
import ProfileSection from "@/components/profile-upload";
import SectionHeader from "@/components/section-header";
import { useUser } from "@/store/user";
import { Mail } from "lucide-react";
import { useState } from "react";

interface AccountTabProps {
  onSave: () => void;
}

export default function AccountTab({ onSave }: AccountTabProps) {
  const { data: userData } = useUser();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <SectionHeader
        title="Personal info"
        description="Update your photo and personal details here."
      />

      <div className="mb-8">
        <ProfileSection initialImage="" />
      </div>

      <FormField label="Company name" htmlFor="companyName">
        <input
          id="companyName"
          type="text"
          defaultValue={userData?.companyName ?? "--|--"}
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
            defaultValue={userData?.email ?? "--|--"}
            disabled
            className="cursor-not-allowed opacity-50 w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
          />
        </div>
      </FormField>

      <FormField label="Mobile number" htmlFor="mobile">
        <input
          id="mobile"
          type="tel"
          defaultValue={userData?.phoneNumber ?? "--|--"}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
        />
      </FormField>

      <FormField label="Client ID" htmlFor="clientId">
        <input
          id="clientId"
          type="text"
          defaultValue={userData?.clientId ?? "--|--"}
          disabled
          className="cursor-not-allowed opacity-50 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
          readOnly
        />
      </FormField>

      <FormField label="API KEY" htmlFor="apiKey">
        <input
          id="apiKey"
          type="text"
          defaultValue={userData?.publicKey ?? "--|--"}
          disabled
          className="cursor-not-allowed opacity-50 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
          readOnly
        />
      </FormField>

      <FormField label="Encryption Key" htmlFor="encryptionKey">
        <div className="relative">
          <input
            id="encryptionKey"
            type={showPassword ? "text" : "password"}
            defaultValue={userData?.encryptionKey ?? "--|--"}
            disabled
            className="cursor-not-allowed opacity-50 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
            readOnly
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" x2="22" y1="2" y2="22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </button>
        </div>
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
