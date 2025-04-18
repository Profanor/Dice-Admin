export type Currency = "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "HKD" | "NGN"

export interface PlayerData {
  id: number
  position: number
  name: string
  avatar: string
  currency: Currency
  amountStaked: number
  wins: number
  losses: number
  gamesPlayed: number
  frequentlyPlayedGame: string
}
