import type React from "react";
import { useState } from "react";
import SectionHeader from "@/components/section-header";
import FormField from "@/components/form-field";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordTab() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change submitted");
  };

  return (
    <>
      <SectionHeader
        title="Change Password"
        description="Update your password to keep your account secure."
      />

      <form onSubmit={handleSubmit}>
        <FormField label="Current Password" htmlFor="currentPassword">
          <div className="relative">
            <input
              id="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Enter your current password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </FormField>

        <FormField label="New Password" htmlFor="newPassword">
          <div className="relative">
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Enter your new password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </FormField>

        <FormField label="Confirm Password" htmlFor="confirmPassword">
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Confirm your new password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </FormField>

        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer px-4 py-2 bg-[#2BADE7] text-white rounded-full hover:bg-[#1A9AD5] transition-colors"
          >
            Save Password
          </button>
        </div>
      </form>
    </>
  );
}
