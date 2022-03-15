export type TranslatableText =
  | string
  | {
    id: number
    fallback: string
    data?: {
      [key: string]: string | number
    }
  }

// Global state
export interface GlobalState {
  wrongNetworkGuideModalOpened: boolean
}

export interface State {
  global: GlobalState,
  cryptopuffies: CryptoPuffiesState
}


export interface CryptoPuffiesState {
  totalSupply: number,
  maxMintPerUser: number,
  maxTokens: number,
  mintPrice: number,
  earlyMintingWindow: number,
  goldenTicketDiscount: number,
  mintStartTimeStamp: number,
  tokensOfOwner: number[],
  tokensMinted: number,
  tokensData: any[],
  tokensBestFriends: number[],
  tokensNemesis: number[],
  goldenTickets: number
}