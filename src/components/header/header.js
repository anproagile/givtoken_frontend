/** @jsx jsx */
import { jsx, Container, Flex, Button, Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import GIV_LOGO from 'assets/giv_logo_45.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import headerData from './header.data';
import ScrollView from '@mattjennings/react-modal/'

import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
// import Web3 from "web3";
import icon_Logo from '../../img/logo.svg';

// import Roadmap from '../roadmap/roadmap';
import NextLink from 'next/link'
import RoadmapModal from 'components/roadmap/roadmap-modal';

import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from '@mattjennings/react-modal';

import styled from "styled-components";

export default function Header({ className }) {

  const [currentAccount, setCurrentAccount] = useState(null);

  const [showModal, setShowModal] = useState(false);


  const tokenAddress = '0xef9ff327783a4d7565728fa846aa80d5e4677a28';

  const [status, setStatus] = useState({
    show: false,
    isConnected: false,
    connecting: false,
    info: { error: false, msg: null },
  });
  
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      setStatus({
        isConnected: true,
        connecting: false,
        info: { error: false, msg: "connected" },
      });
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      setStatus({
        isConnected: false,
        connecting: false,
        info: { error: false, msg: "disconnected" },
      });
      console.log("No authorized account found");

    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);

      setStatus({
        isConnected: true,
        connecting: false,
        info: { error: false, msg: "connected" },
      });
  
      console.log(status.info.msg);


      // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      // const erc20accounts = await web3.eth.getAccounts();

      // const contract = new Web3.eth.Contract(GIV_ABI, GIV_ADDRESS);
      // const tokenBalance = await contract.methods.balanceOf(accounts[0]).call();
      // console.log(tokenBalance);

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  const openUniswap = () => {
    window.open('https://app.uniswap.org/', '_blank');
  }
  const openModal = () => {
    setStatus({
      show: true,
      // showModal: true,
    });

    document.body.style.overflow = 'hidden';
  };

  const onClose = () => {
    setStatus({
      show: false
    });
    console.log('Show status',status.show);
    document.body.style.overflow = 'auto';
    // this.setState({ show: false });
  };



  return (
    <DrawerProvider>
      <header className={className} id="header">
      <nav class="header" id="header" sx={styles.header}>
        <div class="c-grid-fluid">
          <div class="header__wrapper">
            <div class="header__wrapper-left">
              <div>
                <div class="logo logo--header"><a class="logo__btn" href=""><img src={icon_Logo} alt=""></img></a></div>
                <div class="c-btn__wrapper"><a class="c-btn" href="#"><span>THE GIVING pool</span></a></div>
              </div>
              <div>
                <div class="hamburger hamburger--squeeze" role="button" hamburger-js="hamburger-js">
                  <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header__wrapper-mobile" mobile-block-js>
              <div class="header__wrapper-middle">
                <mav class="header__nav"><a href="#">Roadmap</a><a href="#">WHITEPAPER</a><a href="#">Tokenomics</a></mav>
              </div>
              <div class="header__wrapper-right">
                <div class="c-btn__wrapper"><a class="c-btn" href="#"><span>chart</span></a><a class="c-btn" href="#"><span>buy on pancake swap</span></a><a class="c-btn" href="#"><span>COnnect wallet</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {

  continue_button: {
    
    variant: 'buttons.defaultBtn',
    float: 'right',
    textAlign: 'right',   
    color: 'white',
    fontFamily: 'headerButton', 
    background: 'transparent', 
    fontSize: ['45px !important', null, null, 4],
    letterSpacings: '3px',     
    cursor: 'pointer',
    lineHeight: '50px', 
    transition: 'all 0.25s',
    fontWeight: 500,
    pl: '80%',
    padding: ['10px 15px', null, '15px 30px'],
    mr: 2,
    '&:hover': {
      color: '#d1adad',
      boxShadow: 'rgba(256, 256, 256, 0.5) 0px 12px 24px -10px',
    },
  },
  modals: {
    width: '99%',    
    background: '#ffffff',
    // overflowY: 'scroll',
  },
  modalContent: {
      px: '1rem',
      flexGrow: 1,
      // overflowY: 'scroll',
      // position: 'relative',
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000E38 !important',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.connectwallet__btn': {
      flexShrink: 0,      
    },
    '.title__btn': {
      flexShrink: 0,      
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#FFFFFF',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
    socialmenus: {
      mt: [1, 1],
      mb: 1,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    link: {
      pt: 3,
      pb: 3,
      pl: 3,
      pr: 3,
      background: '#000000',
      color: 'text',
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      // px: [4, null, 2],
      ':hover': {
        color: 'primary',
      },
    },
  },
  container: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 'none !important',
  },
  container_modal: {
    '&::-webkit-scrollbar': {
      width: '0px'
    },
    borderRadius: 60,
    maxWidth: 'none !important',
    width: '98%',
    my: '1vh',
    py: '200px',
    pt: '30px',
    pb: '98vh',
    background: '#101B3FF0',
    width: '100%',
   height: '100%',
   overflow: 'auto'
  },

  container_modal_inner: {
    height: '98vh !important',
    pb: '5vh',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1384px)': {
      display: 'block',
    },
    a: {
      fontSize: 4,
      fontWeight: '500',
      fontFamily: 'headerButton',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      color: '#FFFFFF',
      transition: 'all 0.15s',
      '&:hover': {
        color: '#00ffff',
      },
      '&.active': {
        color: '#F53548',
      },
    },
  },


};
