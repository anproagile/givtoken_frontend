export enum QuoteToken {
  'AVAX' = 'AVAX',
  'PEFI' = 'PEFI',
}

export interface Address {
  256?: string
  128?: string
  43113?: string
  43114: string
}

export interface Token {
  symbol: string
  address?: Address
  decimals?: number
  projectLink?: string
}
