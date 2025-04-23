import { LoginMerchantResponse } from "@/api/models/Auth/Auth";
import { create } from "zustand";

export interface UserState extends Partial<LoginMerchantResponse> {
  updateUser: (data: Partial<LoginMerchantResponse>) => void;
  logoutUser: () => void;
}

export const useUser = create<UserState>((set) => ({
  accessToken: "",
  data: undefined,
  redirectUrl: "",
  refreshToken: "",
  updateUser: (data: Partial<LoginMerchantResponse>) =>
    set((state) => ({ ...state, ...data })),
  logoutUser: () =>
    set({
      accessToken: "",
      data: undefined,
      redirectUrl: "",
      refreshToken: "",
    }),
}));
