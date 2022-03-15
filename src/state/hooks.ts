import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import useRefresh from 'hooks/useRefresh';
import { State, GlobalState, CryptoPuffiesState } from './types'
import {
  fetchCryptoPuffiesGlobalDataAsync,
  fetchCryptoPuffiesUserDataAsync,
  fetchCryptoPuffiesGoldenTicket
} from './actions';

export const useFetchPublicData = () => {
  return null;
}

// Global
export const useGlobal = () => {
  const { wrongNetworkGuideModalOpened }: GlobalState = useSelector((state: State) => state.global)

  return { wrongNetworkGuideModalOpened }
}


export const useCryptoPuffies = (account): CryptoPuffiesState => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchCryptoPuffiesData = async () => {
      dispatch(fetchCryptoPuffiesGlobalDataAsync())
      dispatch(fetchCryptoPuffiesUserDataAsync(account))
    }

    fetchCryptoPuffiesData()
  }, [account, dispatch, fastRefresh])

  const cryptopuffies = useSelector((state: State) => state.cryptopuffies)
  return cryptopuffies
}

export const useUserGoldenTickets = (account): number => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUserGoldenTicketData = async () => {
      dispatch(fetchCryptoPuffiesGoldenTicket(account))
    }

    fetchUserGoldenTicketData()
  }, [account, dispatch, fastRefresh])

  const goldenTickets = useSelector((state: State) => state.cryptopuffies.goldenTickets)
  return goldenTickets
}