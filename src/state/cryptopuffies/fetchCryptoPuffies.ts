import cryptoPuffiesABI from 'config/abi/cryptopuffies.json'
import multicall from 'utils/multicall'
import { getCryptoPuffiesAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'

export const fetchGlobalData = async () => {
  const [totalSupply, maxMintPerUser, maxTokens, mintPrice, earlyMintingWindow, goldenTicketDiscount, mintStartTimeStamp] = await multicall(
    cryptoPuffiesABI,
    [
      {
        address: getCryptoPuffiesAddress(),
        name: 'totalSupply',
      },
      {
        address: getCryptoPuffiesAddress(),
        name: 'MAX_MINT_PER_USER',
      },
      {
        address: getCryptoPuffiesAddress(),
        name: 'MAX_TOKENS',
      },
      {
        address: getCryptoPuffiesAddress(),
        name: 'MINT_PRICE',
      },
      {
        address: getCryptoPuffiesAddress(),
        name: 'EARLY_MINTING_WINDOW',
      },
      {
        address: getCryptoPuffiesAddress(),
        name: 'GOLDEN_TICKET_DISCOUNT',
      },
      {
        address: getCryptoPuffiesAddress(),
        name: 'mintStartTimestamp',
      },
    ],
  )

  return {
    totalSupply: totalSupply[0].toNumber(),
    maxMintPerUser: maxMintPerUser[0].toNumber(),
    maxTokens: maxTokens[0].toNumber(),
    mintPrice: getBalanceNumber(mintPrice),
    earlyMintingWindow: earlyMintingWindow[0].toNumber(),
    goldenTicketDiscount: getBalanceNumber(goldenTicketDiscount),
    mintStartTimeStamp: mintStartTimeStamp[0].toNumber()
  }
}

export default fetchGlobalData;
