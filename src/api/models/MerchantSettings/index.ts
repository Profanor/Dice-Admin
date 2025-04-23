import { MerchantTheme } from "../MerchantTheme";

export interface MerchantSettings {
  id: number;
  merchantId: number;
  logo1xUrl: string;
  logo2xUrl: string;
  cupImageUrl: string;
  fontFamilyUrl: string;
  userDetailsUrl: string;
  shopDetailsUrl: string;
  callbackUrl: string;
  webhookUrl: string;
  hideBalance: boolean;
  superProviderPercentProfit: number;
  providerPercentProfit: number;
  merchantPercentProfit: number;
  userPercentProfit: number;
  agentPercentProfit: number;
  colorGameProfit: number;
  lottoGameProfit: number;
  underOverGameProfit: number;
  oddEvenGameProfit: number;
  singleGameProfit: number;
  megaTenGameProfit: number;
  createdAt: Date;
  updatedAt: Date;
  themes: MerchantTheme;
}

export interface UpdateMerchantSettingsRequest {
  id: number;
}

export interface UpdateMerchantSettingsResponse {
  status: number;
}
