import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getTokenBalance } from 'utils/erc20'
import useWeb3 from 'hooks/useWeb3'
import useRefresh from './useRefresh'

const useTokenBalance = (tokenAddress?: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()
  const web3 = useWeb3()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(web3, tokenAddress, account)
      setBalance(new BigNumber(res))
    }
    const fetchAvaxBalance = async () => {
      const res = await web3.eth.getBalance(account)
      setBalance(new BigNumber(res))
    }

    if (account && web3) {
      if (tokenAddress) {
        fetchBalance()
      } else {
        fetchAvaxBalance()
      }
    }
  }, [account, web3, tokenAddress, fastRefresh])

  return balance
}

export default useTokenBalance
