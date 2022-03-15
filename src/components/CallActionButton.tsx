import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal, Flex } from 'penguinfinance-uikit2'
import useAuth from 'hooks/useAuth'

const CallActionButton = (props) => {
    return (
        <CallActionButtonContainer alignItems='center'>
            <StyledCallActionButton>
                CALL TO ACTION
            </StyledCallActionButton>
        </CallActionButtonContainer >
    )
}

const CallActionButtonContainer = styled(Flex) <{ isMenu?: boolean }>`  
  color: white;
  padding: 15px 20px;
  background: #ff511c;
  box-shadow: none;
  box-sizing: border-box;
  height: 70px;
  Width: 280px;
`


const StyledCallActionButton = styled(Button) <{ isMenu?: boolean }>`
  font-family: PoppinsBold;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  color: white;
  padding: 15px 20px;
  background: transparent;
  box-shadow: none;
  box-sizing: border-box;
`


export default CallActionButton
