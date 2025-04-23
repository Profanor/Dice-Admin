import { useLogin } from "@/api/hooks/auth/useLogin";
import { useState } from "react";
import Button from "./Buttons/button";

const logo2 = "/assets/images/logo2.svg";

export default function LoginCard() {
  const { formFieldHandler, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="flex justify-center mb-6">
        <div className="h-10 w-14">
          <img
            src={logo2}
            alt="Logo"
            className="object-contain h-full mx-auto"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
      <p className="text-center text-black text-xs mb-6">
        Please enter your details
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="clientId"
            className="block text-sm font-medium text-gray-700"
          >
            Client ID
          </label>
          <input
            id="clientId"
            type="text"
            autoFocus
            placeholder="Enter your client ID"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
            {...formFieldHandler.clientId}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...formFieldHandler.password}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
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
        </div>

        <Button
          onClick={formFieldHandler.handleSubmit}
          isLoading={isLoading}
          className="w-full py-2 px-4 mt-4 text-[16px] cursor-pointer border border-transparent rounded-full shadow-sm text-white bg-[#2BADE7] hover:bg-[#1A9AD5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2BADE7]"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
