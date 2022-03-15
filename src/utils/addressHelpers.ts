import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 1
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

export const getMulticallAddress = () => {
  return getAddress(addresses.mulltiCall)
}

export const getPefiAddress = () => {
  return getAddress(addresses.pefi)
}

export const getAvaxAddress = () => {
  return getAddress(addresses.avax)
}

export const getCryptoPuffiesAddress = () => {
  return getAddress(addresses.cryptoPuffies)
}

export const getCryptoGoldenTicketAddress = () => {
  return getAddress(addresses.cryptoPuffiesGoldenTicket)
}