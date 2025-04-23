import { MerchantSettings } from "../MerchantSettings";

export interface LoginMerchantRequest {
  clientId: string;
  password: string;
}

export interface LoginMerchantResponse {
  accessToken: string;
  refreshToken: string;
  redirectUrl: string;
  data: {
    id: number;
    companyName: string;
    password: string;
    email: string;
    phoneNumber: string;
    providerId: number;
    clientId: string;
    hashedClientId: string;
    isDefaultPassword: boolean;
    currency: string;
    country: string;
    privateKey: string;
    publicKey: string;
    encryptionKey: string;
    otpToken: string;
    verifiedEmail: boolean;
    accountStatus: string;
    createdAt: Date;
    updatedAt: Date;
    MerchantSettings: MerchantSettings;
  };
}
