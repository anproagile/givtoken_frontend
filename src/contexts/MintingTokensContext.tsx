import React, { useState } from 'react'

interface Token {
  attributes: any[]
  description: string
  // eslint-disable-next-line camelcase
  external_url: string
  image: string
  name: string
  tokenId: number
  type: string
} 

const MintingTokensContext = React.createContext({
  mintingTokens: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateMintingTokens: (mintingTokens: Token[]) => null
})

const MintingTokensContextProvider = ({ children }) => {
  const [mintingTokens, setMintingTokens] = useState([])

  const updateMintingTokens = newMintingTokens => {
    setMintingTokens(newMintingTokens)
  }

  return (
    <MintingTokensContext.Provider
      value={{
        mintingTokens,
        updateMintingTokens
      }}
    >
      {children}
    </MintingTokensContext.Provider>
  )
}

export { MintingTokensContext, MintingTokensContextProvider }
