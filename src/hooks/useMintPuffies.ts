import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import {
  fetchCryptoPuffiesGlobalDataAsync
} from 'state/actions'
import {
  mintPuffy,
  batchMintPuffies
} from 'utils/callHelpers'
import { 
  useCryptoPuffies, // club penguin
} from './useContract'

// club penguin
export const useMintPuffy = () => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const cryptoPuffiesContract = useCryptoPuffies()

  const handleMintPuffy = useCallback(
    async (avaxAmount: string) => {
      const txHash = await mintPuffy(cryptoPuffiesContract, account, avaxAmount)
      dispatch(fetchCryptoPuffiesGlobalDataAsync())
      return txHash;
    },
    [account, dispatch, cryptoPuffiesContract],
  )

  return { onMintPuffy: handleMintPuffy }
}

export const useBatchMintPuffies = () => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const cryptoPuffiesContract = useCryptoPuffies()

  const handleBatchMintPuffies = useCallback(
    async (mintToAmount: number, avaxAmount: string) => {
      const txHash = await batchMintPuffies(cryptoPuffiesContract, account, avaxAmount, mintToAmount)
      dispatch(fetchCryptoPuffiesGlobalDataAsync())
      return txHash;
    },
    [account, dispatch, cryptoPuffiesContract],
  )

  return { onBatchMintPuffies: handleBatchMintPuffies }
}

export default useMintPuffy
