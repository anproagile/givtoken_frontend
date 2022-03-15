import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { useDispatch } from 'react-redux'
// Approve a Farm
export const useApprove = (lpContract: Contract, type?: string) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  return {}
}

export default useApprove
