import type React from "react";
import { useState } from "react";

const logo2 = "/assets/images/logo2.svg";

export default function LoginCard() {
  const [clientId, setClientId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ clientId, password });
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

      <form onSubmit={handleSubmit} className="space-y-4">
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
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            placeholder="Enter your client ID"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BADE7] focus:border-[#2BADE7]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 mt-4 text-[16px] cursor-pointer border border-transparent rounded-full shadow-sm text-white bg-[#2BADE7] hover:bg-[#1A9AD5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2BADE7]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
