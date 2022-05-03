import React, { useState } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { Flex, ResetCSS } from 'penguinfinance-uikit2'
import SvgIcon from 'components/SvgIcon'
import UnlockButton from 'components/UnlockButton'

import DiscordButton from 'components/DiscordButton'

import UserBlock from 'components/UserBlock'
import useWindowSize from 'hooks/useWindowSize';
import config from './config'



const Header = () => {

  const [activeMenu, setActiveMemu] = useState("none")



  const windowSize = useWindowSize();
  const [activeSection, setActiveSection] = useState('cryptopuffies')
  const [viewMenu, setViewMenu] = useState(false)
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const history = useHistory();
  const { account } = useWeb3React();

  const onClickMenuItem = row => async event => {
    event.preventDefault();
    setActiveSection(row.value)

    if (row.href === '/mint' || row.href === '/my-puffies') {
      history.push(row.href);
    } else {
      await history.push('/');
      const menuElement = document.getElementById(row.href);
      if (menuElement) {
        menuElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (viewMenu) {
      setViewMenu(false);
    }
  }

  const handleOpenMenu = () => {
    setViewMenu(true);
  }

  const handleCloseMenu = () => {
    setViewMenu(false);
  }

  const handleOpenHome = () => {
    history.push('/');
  }


  const onClickNavMenuItem = row => async event => {
    event.preventDefault();
    // setActiveSection(row.value)

    console.log("Nav link", row.href);
    history.push(row.href);
    // if (row.href === '/mint' || row.href === '/my-puffies') {
    //   history.push(row.href);
    // } else {
    //   await history.push('/');
    //   const menuElement = document.getElementById(row.href);
    //   if (menuElement) {
    //     menuElement.scrollIntoView({ behavior: "smooth" });
    //   }
    // }

    // if (viewMenu) {
    //   setViewMenu(false);
    // }
  }

  const onClickHeaderMenu = (e, link) => {
    e.preventDefault();
    setActiveMemu(link);
    history.push(link);

  }

  return (
    <nav className="header" id="header">
      <div className="c-grid-fluid">
        <div className="header__wrapper">
          <div className="header__wrapper-left">
            <div>
              <div className="logo logo--header">
                <a className="logo__btn" href="/" onClick={e => onClickHeaderMenu(e, "/")}>
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <div className="c-btn__wrapper">
                <a className="c-btn" href="/home" onClick={e => onClickHeaderMenu(e, "/")}>
                  <span>THE GIVING POOL</span>
                </a>
              </div>
            </div>
            <div>
              <div className="hamburger hamburger--squeeze" role="button" hamburger-js="hamburger-js">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
          <div className="header__wrapper-mobile" mobile-block-js="mobile-block-js">
            <div className="header__wrapper-middle">
              <nav className="header__nav">
                <a className={activeMenu === "/home" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/home")} headernav-js="headerhome-js">Home</a>
                <a className={activeMenu === "/roadmap" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/roadmap")} headernav-js="headerroadmap-js">Roadmap</a>
                <a className={activeMenu === "/whitepaper" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/whitepaper")} headernav-js="headerwhitepaper-js">WHITEPAPER</a>
                <a className={activeMenu === "/tokenomics" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/tokenomics")} headernav-js="headertokenomics-js">Tokenomics</a>
              </nav>
            </div>
            <div className="header__wrapper-right">
              <div className="c-btn__wrapper">
                <a className="c-btn" href="https://www.coinbase.com/price" rel="noreferrer" target="_blank"><span>chart</span></a>
                <a className="c-btn" href="https://app.uniswap.org/" rel="noreferrer" target="_blank"><span>BUY NOW</span>
                </a><a className="c-btn" href="/" onClick={e => onClickHeaderMenu(e, "/")}><span>Connect wallet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </nav >

    // <nav className="header" id="header">
    //   <div className="c-grid-fluid">
    //     <div className="header__wrapper">
    //       <div className="header__wrapper-left">
    //         <div>
    //           <div className="logo logo--header">
    //             <a className="logo__btn" href="/index.html">
    //               <img src="img/logo.png" srcSet="img/logo@2x.png 2x" alt="" />
    //             </a>
    //           </div>
    //           <div className="c-btn__wrapper"><a className="c-btn" href="/"><span>THE GIVING pool</span></a></div>
    //         </div>
    //         <div>
    //           <div className="hamburger hamburger--squeeze" role="button" hamburger-js="hamburger-js">
    //             <div className="hamburger-box">
    //               <div className="hamburger-inner" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="header__wrapper-mobile" mobile-block-js>
    //         <div className="header__wrapper-middle">
    //           <nav className="header__nav">
    //             <a href="/roadmap-1.html">Roadmap</a>
    //             <a href="/whitepaper.html">WHITEPAPER</a>
    //             <a href="/tokenomics.html">Tokenomics</a>
    //           </nav>
    //         </div>
    //         <div className="header__wrapper-right">
    //           <div className="c-btn__wrapper">
    //             <a className="c-btn" href="/"><span>chart</span></a>
    //             <a className="c-btn" href="/"><span>buy now</span></a>
    //             <a className="c-btn" href="/"><span>Connect wallet</span></a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav >

    // <Section>
    //   <ResetCSS />
    //   <BackgroundImage />
    //   <HeaderContainer>
    //     {windowSize.width < 1200 ?
    //       <Flex alignItems="center" justifyContent="space-between" width="100%">
    //         {windowSize.width < 768 ?
    //           <>
    //             <Flex alignItems='center'>
    //               <Flex onClick={handleOpenHome}>
    //                 <img
    //                   src={`${process.env.PUBLIC_URL}/images/clubphysique/header/cp_logo.svg`}
    //                   width="64px" alt='logo' />
    //               </Flex>
    //             </Flex>
    //             <Flex onClick={handleOpenMenu} >
    //               <SvgIcon src={`${process.env.PUBLIC_URL}/images/header/hamburger-right.svg`} width="24px" height="24px" />
    //             </Flex>

    //           </>
    //           :
    //           <>
    //             <Flex alignItems='center'>
    //               <Flex onClick={handleOpenMenu}>
    //                 <SvgIcon src={`${process.env.PUBLIC_URL}/images/header/hamburger-left.svg`} width="24px" height="24px" />
    //               </Flex>
    //             </Flex>
    //             {isHomepage &&
    //               <Flex onClick={handleOpenHome}>
    //                 <img src={`${process.env.PUBLIC_URL}/images/clubphysique/header/cp_logo.svg`} width="110px" alt='logo' />
    //               </Flex>
    //             }
    //             <DiscordButton />
    //             {account ? <UserBlock isMenu={false} /> : <UnlockButton />}
    //           </>
    //         }
    //       </Flex>
    //       :
    //       <Flex alignItems="center" justifyContent='space-between' width="100%">
    //         <>
    //           <Menu>
    //             {menuEntries.map((row) => {
    //               return (
    //                 <MenuItem
    //                   href={row.href}
    //                   key={row.value}
    //                   isActive={activeSection === row.value}
    //                   onClick={onClickMenuItem(row)}
    //                 >
    //                   {row.label}
    //                 </MenuItem>
    //               )
    //             })}
    //           </Menu>
    //           <HeaderLogoContainer onClick={handleOpenHome}>
    //             <img
    //               src={`${process.env.PUBLIC_URL}/images/clubphysique/header/cp_logo.svg`}
    //               width="280px" alt='logo' />
    //           </HeaderLogoContainer>
    //         </>
    //         <Flex alignItems='center'>
    //           <DiscordConnectContainer>
    //             <DiscordButton />
    //           </DiscordConnectContainer>
    //           <WalletActionContainer>
    //             {account ? <UserBlock isMenu={false} /> : <UnlockButton />}
    //           </WalletActionContainer>
    //         </Flex>
    //       </Flex>
    //     }
    //   </HeaderContainer>
    //   <MenuPanel isPushed={viewMenu}>
    //     {viewMenu &&
    //       <>
    //         <MenuHeader padding='16px' justifyContent='space-between'>
    //           <img src={`${process.env.PUBLIC_URL}/images/clubphysique/header/cp_logo.svg`} width="64px" alt='logo' />
    //           <Flex onClick={handleCloseMenu} >
    //             <SvgIcon src={`${process.env.PUBLIC_URL}/images/header/hamburger-close.svg`} width="24px" height="24px" />
    //           </Flex>
    //         </MenuHeader>
    //         <Flex flexDirection='column' alignItems='center'>
    //           <Menu flexDirection='column' alignItems='center' mb='40px'>
    //             {menuEntries.map((row) => {
    //               return (
    //                 <MobileMenuItem
    //                   href={row.href}
    //                   key={row.value}
    //                   isActive={activeSection === row.value}
    //                   onClick={onClickMenuItem(row)}
    //                 >
    //                   {row.label}
    //                 </MobileMenuItem>
    //               )
    //             })}
    //           </Menu>
    //           <DiscordButton />
    //           {account ? <UserBlock isMenu /> : <UnlockButton isMenu />}
    //         </Flex>
    //       </>
    //     }
    //   </MenuPanel>
    // </Section>
  )
}



const HeaderLogoContainer = styled(Flex)`
                    transform: translate(0%, 15%);
                    `
const DiscordConnectContainer = styled(Flex)``

const HeaderLogoBackgroundImage = styled.div`
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: transparent;
                    // background: #4FDBFA;
                    background-image: url('/images/clubphysique/header/header_logo_center_bg.png');
                    z-index: -1;
                    `;


export const PlayerImg = styled.img`
                    padding-left: 10px,
                    padding-right: 10px,
                    width: 26px;
                    height: 26px;
                    cursor: pointer;

                    &:last-child {
                      margin - left: 8px;
  }
                    @media (min-width: 1400px) {
                      margin - left: 16px;
  }
                    `;

const Section = styled.div`
                    position: relative;
                    position: absolute;
                    // position: fixed;
                    width: 100%;
                    z-index: 60;
                    `;

const BackgroundImage = styled.div`
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: transparent;
                    // background: #4FDBFA;
                    background-image: url('/images/clubphysique/header/header_background.jpg');
                    z-index: -1;
                    `;

const HeaderContainer = styled(Flex)`
                    // width: 100%;
                    height: 56px;
                    padding: 0px 16px;
                    max-width: 1440px;
                    margin: auto;
                    align-items: center;

                    @media (min-width: 768px) {
                      height: 87px;
                    padding: 0px 40px;
  }
                    @media (min-width: 1200px) {
                      height: 105px;
  }
                    @media (min-width: 1440px) {
                      padding: 0px 105px 0px 105px;
  }

                    & svg {
                      cursor: pointer;
  }

                    img {
                      cursor: pointer;
  }
                    `

// menu
const Menu = styled(Flex)``
const MenuItem = styled.a<{ isActive?: boolean }>`
                      font-family: PoppinsBold;
                      color: white;
                      font-style: normal;
                      font-weight: normal;
                      font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
                      font-size: 18px;
                      line-height: 27px;
                      margin-right: 0;
                      cursor: pointer;

                      margin-top: 32px;

                      &:first-child {
                        margin - top: 0;
  }

                      &:last-child {
                        margin - right: 0px;
  }

                      @media (min-width: 1200px) {
                        margin - right: 40px;
                      margin-top: 0;

                      &:first-child {
                        margin - top: 0;
    }
  }
                      `

const MobileMenuItem = styled.a<{ isActive?: boolean }>`
                        font-family: Poppins;
                        color: black;
                        font-style: normal;
                        font-weight: normal;
                        font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
                        font-size: 18px;
                        line-height: 27px;
                        margin-right: 0;
                        cursor: pointer;

                        margin-top: 32px;

                        &:first-child {
                          margin - top: 0;
  }

                        &:last-child {
                          margin - right: 0px;
  }

                        @media (min-width: 1200px) {
                          margin - right: 40px;
                        margin-top: 0;

                        &:first-child {
                          margin - top: 0;
    }
  }
                        `
// social links
const SocialLinksContainer = styled(Flex)`
                        // margin-left: 90px;

                        @media (min-width: 1200px) {
                          // margin-left: 90px;
                        }
                        `
const SocialLinkItem = styled.a<{ isActive?: boolean }>`
                          margin-right: 40px;
                          cursor: pointer;

                          &:last-child {
                            margin - right: 0;
  }
                          `

const MobileSocialLinkItem = styled.a<{ isActive?: boolean }>`
                            margin-right: 40px;
                            cursor: pointer;
                            color: black;

                            &:last-child {
                              margin - right: 0;
  }
                            `

// wallet actions
const WalletActionContainer = styled(Flex)``


const MenuPanel = styled.div<{ isPushed: boolean }>`
                            position: fixed;
                            background: white;
                            width: ${({ isPushed }) => (isPushed ? `100%` : 0)};
                            height: 100vh;
                            z-index: 20;
                            transition: width 0.2s;
                            left: 0;
                            top: 0;

                            svg {
                              cursor: pointer;
  }
                            `;

const MenuHeader = styled(Flex)`
                            padding: 16px;

                            @media (min-width: 768px) {
                              padding: 32px 40px;
  }
                            `;

export default Header
