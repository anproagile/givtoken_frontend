import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal, Flex } from 'penguinfinance-uikit2'
import useAuth from 'hooks/useAuth'

const UnlockButton = (props) => {
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (

    <UnlockedButtonContainer alignItems='center' mr='32px' onClick={onPresentConnectModal} {...props}>
      <StyledUnlockedButton>
        CONNECT WALLET
      </StyledUnlockedButton>
    </UnlockedButtonContainer >
  )
}

const UnlockedButtonContainer = styled(Flex) <{ isMenu?: boolean }>`  
  color: white;
  padding: 15px 20px;
  background: ${({ isMenu }) => isMenu ? '#EB5757' : 'transparent'};
  box-shadow: none;
  border: 1px solid ${({ isMenu }) => isMenu ? '#EB5757' : '#ff511c'};
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    height: 40px;
  }

  @media (min-width: 1200px) {
    height: 48px;
  }
`


const StyledUnlockedButton = styled(Button) <{ isMenu?: boolean }>`
  font-family: PoppinsBold;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 27px;
  color: white;
  padding: 15px 20px;
  background: ${({ isMenu }) => isMenu ? '#EB5757' : 'transparent'};
  box-shadow: none;
//   border: 1px solid ${({ isMenu }) => isMenu ? '#EB5757' : '#ff511c'};
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    height: 48px;
  }

  @media (min-width: 1200px) {
    height: 56px;
  }
`


export default UnlockButton
