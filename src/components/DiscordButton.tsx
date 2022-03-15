import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal, Flex } from 'penguinfinance-uikit2'
import useAuth from 'hooks/useAuth'

const DiscordButton = (props) => {
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (

    <DiscordButtonContainer alignItems='center' mr='32px' onClick={onPresentConnectModal} {...props}>
      <img src={`${process.env.PUBLIC_URL}/images/clubphysique/header/discord.svg`} width="24px" height="24px" alt='social' />
      <StyledDiscordButton>
        JOIN NOW
      </StyledDiscordButton>
    </DiscordButtonContainer >

  )
}

const DiscordButtonContainer = styled(Flex) <{ isMenu?: boolean }>`  
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

const SocialImageItem = styled.a<{ isActive?: boolean }>`
  margin-right: 40px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`

const StyledDiscordButton = styled(Button) <{ isMenu?: boolean }>`
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

export default DiscordButton
