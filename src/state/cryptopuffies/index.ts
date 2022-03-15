/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { fetchGlobalData } from './fetchCryptoPuffies'
import { fetchUserData, fetchUserGoldenTickets } from './fetchCryptoPuffiesUser'
import { CryptoPuffiesState } from '../types'

const initialState: CryptoPuffiesState = {
  totalSupply: 0,
  mintPrice: 0,
  maxMintPerUser: 0,
  maxTokens: 8888,
  earlyMintingWindow: 3600,
  goldenTicketDiscount: 0,
  mintStartTimeStamp: 1644119342,
  tokensOfOwner: [],
  tokensMinted: 0,
  tokensData: [],
  tokensBestFriends: [],
  tokensNemesis: [],
  goldenTickets: 0
}

export const CryptoPuffiesSlice = createSlice({
  name: 'CryptoPuffies',
  initialState,
  reducers: {
    setCryptoPuffiesGlobalData: (state, action) => {
      state.totalSupply = action.payload.totalSupply
      state.mintPrice = action.payload.mintPrice
      state.maxMintPerUser = action.payload.maxMintPerUser
      state.maxTokens = action.payload.maxTokens
      state.earlyMintingWindow = action.payload.earlyMintingWindow
      state.goldenTicketDiscount = action.payload.goldenTicketDiscount
      state.mintStartTimeStamp = action.payload.mintStartTimeStamp
    },
    setCryptoPuffiesUserData: (state, action) => {
      state.tokensOfOwner = action.payload.tokensOfOwner
      state.tokensMinted = action.payload.tokensMinted
      state.tokensData = action.payload.tokensData
      state.tokensBestFriends = action.payload.tokensBestFriends
      state.tokensNemesis = action.payload.tokensNemesis
      state.goldenTickets = action.payload.goldenTickets
    },
    setUserGoldenTickets: (state, action) => {
      state.goldenTickets = action.payload.goldenTickets
    }
  },
})

// Actions
export const {
  setCryptoPuffiesGlobalData,
  setCryptoPuffiesUserData,
  setUserGoldenTickets
} = CryptoPuffiesSlice.actions

export const fetchCryptoPuffiesGlobalDataAsync = () => async (dispatch) => {
  const { totalSupply, mintPrice, maxMintPerUser, maxTokens,
    earlyMintingWindow, goldenTicketDiscount, mintStartTimeStamp } = await fetchGlobalData()

  // const tierHurdles = await fetchTierHurdles()
  dispatch(
    setCryptoPuffiesGlobalData({
      totalSupply,
      mintPrice,
      maxMintPerUser,
      maxTokens,
      earlyMintingWindow,
      goldenTicketDiscount,
      mintStartTimeStamp
    }),
  )
}

export const fetchCryptoPuffiesUserDataAsync = account => async (dispatch) => {
  const userData = await fetchUserData(account);
  if (userData) {
    const { tokensOfOwner, tokensMinted, tokensData, tokensBestFriends, tokensNemesis, goldenTickets } = userData;

    dispatch(
      setCryptoPuffiesUserData({
        tokensOfOwner,
        tokensMinted,
        tokensData,
        tokensBestFriends,
        tokensNemesis,
        goldenTickets
      })
    )
  }
}

export const fetchCryptoPuffiesGoldenTicket = account => async (dispatch) => {
  const goldenTickets = await fetchUserGoldenTickets(account);
  dispatch(
    setUserGoldenTickets({
      goldenTickets
    })
  )
}

export default CryptoPuffiesSlice.reducer
