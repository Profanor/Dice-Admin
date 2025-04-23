export interface MerchantTheme {
  id: number;
  merchantId: number;
  primaryColor: string;
  secondaryColor: string;
  background: string;
  primaryActiveColor: string;
  primaryTextColor: string;
  primaryActiveTextColor: string;
  evenTournamentTable: string;
  oddTournamentTable: string;
  textColor: string;
  baseTextColor: string;
  tournamentBtnBackground: string;
  tournamentBtnColor: string;
  playBtnBackground: string;
  playButtonColor: string;
  activePlayBtnColor: string;
  activePlayBtnBackground: string;
  btnBorderRadius: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateMerchantThemeRequest {
  id: number;
}

export interface UpdateMerchantThemeResponse {
  status: number;
}
