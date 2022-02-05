/** @jsx jsx */
import { jsx, Container, Flex, Button, Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import GIV_LOGO from 'assets/giv_logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import headerData from './header.data';

import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
// import Web3 from "web3";

import Roadmap from '../roadmap/roadmap';

import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from '@mattjennings/react-modal';

export default function Header({ className }) {

  const [currentAccount, setCurrentAccount] = useState(null);

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

  const showModal = () => {
    console.log('Show status',status.show);
    setStatus({
      show: true
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
      
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>

          <Logo src={GIV_LOGO} path={'/'} />  
          
          <Button
            className="title__btn"
            variant="headerButton"
                onClick={showModal}
                aria-label="The Giving Pool"
          >
            THE GIVING POOL
          </Button>


          {/* {headerData.socialItems.map(({ path, label, iconSrc }, i) => (
               <Logo src={iconSrc} path={path} />
          ))} */}

          <Flex as="nav" sx={styles.nav}>
            <Button
              className="connectwallet__btn"
              variant="headerButton"
              // onClick={onclick}
              onClick={showModal}
              // aria-label={label}
            >
              ROADMAP
            </Button>

            <Button
              className="connectwallet__btn"
              variant="headerButton"
              // onClick={onclick}
              onClick={showModal}
              // aria-label={label}
            >
              WHITEPAPER
            </Button>

            <Button
              className="connectwallet__btn"
              variant="headerButton"
              // onClick={onclick}
              onClick={showModal}
              // aria-label={label}
            >
              TOKENOMICS
            </Button>

            {/* {headerData.menuItems.map(({ onclick,path, label }, i) => (
                
              
              // <Link
              //   activeClass="active"
              //   to={path}
              //   spy={true}
              //   smooth={true}
              //   offset={-70}
              //   duration={500}
              //   key={i}
              // >
              //   {label} 
              // </Link>
            ))} */}
          </Flex>

          <Button
            className="connectwallet__btn"
            variant="headerButton"
            aria-label="Chart"
          >
            CHART
          </Button>
          <Button
            className="connectwallet__btn"
            variant="headerButton"
            // onClick={checkWalletIsConnected}
            aria-label="Buy on Pancake Swap"
          >
            BUY ON PANCAKE SWAP
          </Button>
          <Button
            className="connectwallet__btn"
            variant="headerButton"
            onClick={connectWalletHandler}
            aria-label="Connect Wallet"
          >
            CONNECT WALLET
          </Button>

          <MobileDrawer />
        </Container>
      </header>
      <Modal sx={styles.modals} open={status.show}>
      {/* {({ onClose }) => ( */}
        <>
          <ModalFooter>
            <Button onClick={onClose}>OK</Button>
          </ModalFooter>
          <ModalTitle>
            <Text
              sx={{
                fontSize: 2,
                fontWeight: 'medium',
              }}
            >
              Hello!
            </Text>
          </ModalTitle>
          <ModalContent sx={styles.modalContent}>
            <Roadmap></Roadmap>
            <Roadmap></Roadmap>
            <Text>This is a modal example</Text>
          </ModalContent>
          
        </>
      {/* )} */}
    </Modal>
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


  modals: {
    width: '93%',
    background: '#ffffff',
    // overflowY: 'scroll',
  },
  modalContent: {
      px: '1rem',
      flexGrow: 1,
      overflowY: 'scroll',
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
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1465px)': {
      display: 'block',
    },
    a: {
      fontSize: 4,
      fontWeight: 'body',
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
        color: '#FFFFFF',
      },
    },
  },
};
