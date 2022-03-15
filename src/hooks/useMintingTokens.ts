import { useContext } from 'react'
import { MintingTokensContext } from 'contexts/MintingTokensContext'

const useMintingTokens = () => {
  const {
    mintingTokens,
    updateMintingTokens
  } = useContext(MintingTokensContext)
  return {
    mintingTokens,
    updateMintingTokens
  }
}

export default useMintingTokens
