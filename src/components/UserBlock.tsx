/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Button, useWalletModal, Flex, Text, AvaxLogoIcon, Dropdown, LinkExternal } from 'penguinfinance-uikit2'
import useAuth from 'hooks/useAuth'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBalanceNumber } from 'utils/formatBalance'

const UserBlock = (props) => {
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const { account } = useWeb3React();
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;

  const avaxBalance = useTokenBalance()

  const renderAccountData = () => {
    return (
      <AccountContainer isMobile={props.isMenu}>
        <PefiBalances>
          <Flex>
            <AvaxLogoIcon width="24px" mr="8px" />
            <Flex width="100%" justifyContent="space-between">
              <Label fontSize="20px">ETH</Label>
              <Label fontSize="20px">{getBalanceNumber(avaxBalance).toFixed(3)}</Label>
            </Flex>
          </Flex>
        </PefiBalances>
        <Flex mb="16px" mt="8px">
          <StyledLinkExternal
            small
            href={`https://etherscan.io/address/${account}`}
          >
            View on EtherScan
          </StyledLinkExternal>
        </Flex>
        <Flex justifyContent="center">
          {/* <StyledButton isHomepage={isHomepage} scale="sm" mr="8px" onClick={handleAddTokensToMetaMask}>
            Add Tokens
          </StyledButton> */}
          <StyledButton
            scale="sm"
            variant="secondary"
            onClick={() => {
              logout();
              window.localStorage.removeItem('connectorId');
            }}
          >
            Logout
          </StyledButton>
        </Flex>
      </AccountContainer>
    );
  };

  return (
    <>
      {!props.isMenu ?
        <WalletDropdown
          contentClassName="dropdown-content"
          target={
            <UnlockedButtonContainer alignItems='center' mr='32px' onClick={onPresentConnectModal} {...props}>
              <StyledUnlockedButton>
                {accountEllipsis}
              </StyledUnlockedButton>
            </UnlockedButtonContainer >
          }
        >
          {renderAccountData()}
        </WalletDropdown>
        : renderAccountData()
      }
    </>
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
  font-family: Poppins;
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


const AccountContainer = styled.div<{ isMobile?: boolean }>`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors.secondary : "#fff"};
  background: ${({ isMobile }) => isMobile && 'transparent'};
  border-radius: ${({ isMobile }) => !isMobile && '10px'};
  padding: ${({ isMobile }) => !isMobile && '16px 20px'};
  border: 2px solid ${({ theme }) => (theme.isDark ? "#141223" : "#f2f0f4")};
  border: ${({ isMobile }) => isMobile && 'none'};
  max-width: ${({ isMobile }) => isMobile && '200px'};

`;

const WalletDropdown = styled(Dropdown)`
  .dropdown-content {
    background: transparent;
    box-shadow: none;
    left: 48px;
  }
`;

// const YourAssetsLabel = styled(Text)<{ isHomepage?: boolean }>`
//   color: #EE3E40;
//   font-family: 'Gotham-bold';
//   font-weight: normal;
//   font-style: normal;
// `;

const StyledButton = styled(Button) <{ isHomepage: boolean }>`
  font-family: 'Gotham-bold';
  background-color: #EB5757;
  border-color: #EB5757;
  color: white;
  border-radius: 100px;
  padding: 0 24px;
  box-shadow: none;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  line-height: 22px;
`;

const StyledLinkExternal = styled(LinkExternal) <{ isHomepage?: boolean }>`
  color: #EE3E40;
  font-family: 'Gotham-bold';
  font-weight: normal;
  font-style: normal;
  svg {
    fill: #EE3E40;
  }
`;

const Label = styled(Text)`
  color: black;
  font-family: 'Gotham-bold';
  font-weight: normal;
  font-style: normal;
`;

// const LowAvaxBalance = styled.div`
//   background: ${({ theme }) => (theme.isDark ? "#463b66" : "#fff7eb")};
//   border: 1px solid #ffb237;
//   padding: 16px 12px;
//   border-radius: 16px;
// `;

// const Warning = styled(WarningIcon)`
//   fill: #ffb237;
// `;

// const WalletWrapper = styled.div<{ isHomepage?: boolean }>`
//   background: #EE3E40;
//   border: 2px solid ${({ theme, isHomepage}) => (!isHomepage && !theme.isDark) ? '#EE3E40' : 'white'};
//   border: ${({ isHomepage }) => isHomepage && 'none'};
//   border-radius: 50px;
//   padding: ${({ isHomepage }) => isHomepage ? '4px' : '8px'};
//   margin-right: -24px;
//   z-index: 1;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   svg {
//     fill: white;
//     width: ${({ isHomepage }) => isHomepage ? '24px' : '20px'};
//   }
// `;

// const ConnectedButtonWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ArrowDown = styled(ChevronDownIcon)`
//   margin-left: 0;
// `;

const PefiBalances = styled.div`
  padding-top: 8px;
`;

// const Wrapper = styled.div<{ isMobile: boolean }>`
//   margin-top: ${({ isMobile }) => isMobile && '16px'};
// `;

export default UserBlock
