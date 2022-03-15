/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { isEmpty } from 'lodash';
import cryptoPuffiesABI from 'config/abi/cryptopuffies.json'
import cryptoPuffiesGoldenTicketABI from 'config/abi/goldenTicket.json'
import multicall from 'utils/multicall'
import { sleep } from 'utils/time'
import { getCryptoPuffiesAddress, getCryptoGoldenTicketAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'

export const fetchTokenData = async tokenUrl => {
  let loop = true;
  let tokenData = null;
  while (loop) {
    tokenData = await axios.get(tokenUrl);
    if (isEmpty(tokenData)) {
      await sleep(1000)
    } else {
      loop = false
    }
  }
  return tokenData;
}

export const fetchUserData = async (account) => {
  try {
    const [tokensOfOwner, tokensMinted] = await multicall(
      cryptoPuffiesABI,
      [
        {
          address: getCryptoPuffiesAddress(),
          name: 'tokensOfOwner',
          params: [account],
        },
        {
          address: getCryptoPuffiesAddress(),
          name: 'tokensMinted',
          params: [account],
        },
      ],
    )

    const userTokenIds = tokensOfOwner[0].map(tokenId => tokenId.toNumber());
    const tokensUrl = await multicall(cryptoPuffiesABI, userTokenIds.map(tokenId => ({
      address: getCryptoPuffiesAddress(),
      name: 'tokenURI',
      params: [tokenId]
    })));

    const tokensBestFriends = await multicall(cryptoPuffiesABI, userTokenIds.map(tokenId => ({
      address: getCryptoPuffiesAddress(),
      name: 'bestFriend',
      params: [tokenId]
    })));

    const tokensNemesis = await multicall(cryptoPuffiesABI, userTokenIds.map(tokenId => ({
      address: getCryptoPuffiesAddress(),
      name: 'nemesis',
      params: [tokenId]
    })));




    const tokensData = await Promise.all(tokensUrl.map(tokenUrl => fetchTokenData(tokenUrl[0])));




    const [goldenTickets] = await multicall(
      cryptoPuffiesGoldenTicketABI,
      [
        {
          address: getCryptoGoldenTicketAddress(),
          name: 'balanceOf',
          params: [account],
        }
      ],
    )

    return {
      tokensOfOwner: [...tokensOfOwner[0].map(tokenId => tokenId.toNumber())],
      tokensMinted: tokensMinted[0].toNumber(),
      tokensData: tokensData.map(tokenData => tokenData.data),
      tokensBestFriends,
      tokensNemesis,
      goldenTickets: getBalanceNumber(goldenTickets)
    }
  } catch (error) {
    return null;
  }
}

export const fetchUserGoldenTickets = async account => {
  try {
    const [goldenTickets] = await multicall(
      cryptoPuffiesGoldenTicketABI,
      [
        {
          address: getCryptoGoldenTicketAddress(),
          name: 'balanceOf',
          params: [account],
        }
      ],
    )

    return getBalanceNumber(goldenTickets)
  } catch (error) {
    // console.log('ant : error => ', error);
    return null;
  }
}

export default fetchUserData;