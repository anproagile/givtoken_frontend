/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

import Logo from 'components/logo';
import Eclipse from 'assets/eclipse_1_m.svg';

export default function PreviousDonations() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({    
  });
  const subscribe = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });    
  };
  return (
    <section>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
            <Logo sx={styles.logo} src={Eclipse} path={'/'} />
            <Heading as="h2" sx={styles.title}>
                THE <br/>GIVIING TOKEN
            </Heading>
            <Heading as="h2" sx={styles.title_2}>
                GIV
            </Heading>
            <Text as="p" sx={styles.description}>
            contact address: 0x364747dhdDG$978907DSFh46<br/><br/>this box will describe how the token is set up and its tokenomics<br/><br/>
            Contrary to popular belief, Lorem Ipsum is not simply random text. a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.
            </Text>
        </Box>
        <Box sx={styles.contentBox1}>
          <Box sx={styles.contentBoxInner1}>
            <Heading as="h2" sx={styles.title_1}>
              PREVIOUS DONATIONS
            </Heading>
            <Box sx={styles.textContentBoxInner}>
              <Text as="p" sx={styles.description}>
                POOL DATE: DECEMBER 20TH, 2021 | POOL SIZE: 10ETH <br/>
                RECIPIENT: CHARITY A
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner}>
              <Text as="p" sx={styles.description}>
                POOL DATE: DECEMBER 20TH, 2021 | POOL SIZE: 10ETH <br/>
                RECIPIENT: CHARITY A
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner}>
              <Text as="p" sx={styles.description}>
                POOL DATE: DECEMBER 20TH, 2021 | POOL SIZE: 10ETH <br/>
                RECIPIENT: CHARITY A
              </Text>
            </Box>
          </Box>
        </Box>        
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    backgroundColor: 'transparent',
    py: ['30px', null, '30px'],
    width: '48%',
    height: '89%',    
  },
  contentBox1: {
    backgroundColor: 'transparent',
    py: ['30px', null, '30px'],
    width: '48%',
    // height: '90px',
  },
  contentBoxInner1: {
    width: ['100%', null, '100%', '100%'],
    height: ['max-content', null, 'max-content', 'max-content'],
    mx: '0px',
    textAlign: 'left',
    borderRadius: 30,
    px: [1, 1], 
    pb: '3px',  
    backgroundColor: '#1C2F6C',
  },
  contentBoxInner: {
    width: ['100%', null, '100%', '100%'],
    height: ['max-content', null, 'max-content', 'max-content'],
    mx: '0px',
    textAlign: 'left',
    borderRadius: 30,
    px: [1, 1], 
    pb: '3px',  
    backgroundColor: '#1C2F6C',
  },
  textContentBoxInner: {
    width: ['94%', null, '94%', '94%'],
    height: ['max-content', null, 'max-content', 'max-content'],
    mx: '3%',
    textAlign: 'left',
    borderRadius: 30,
    px: [1, 1],
    background: 'linear-gradient(270deg, #1C337E 15%, #3853AD 89%)', 
    py: 5, 
    mb: '2%',
  },
  logo:{
    px: '5%',
    pb: '2%',
  },
  title_2: {
    fontFamily: 'body',
    fontSize: ['14px', null, '28px', null, null, '45px', null, '52px'],
    color: '#eb8368',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['1px', null, '1px'],
    mt: '0%',
    py: 0,
    px: '5%',
    pt: '0%',

  },
  title_1: {
    fontFamily: 'body',
    fontSize: ['14px', null, '28px', null, null, '45px', null, '52px'],
    color: 'white',
    lineHeight: [1, null, null, 1],
    fontWeight: '700',
    letterSpacing: ['1px', null, '1px'],
    mt: '0%',
    py: 0,
    px: '5%',
    pb: '6%',
    pt: '5%',
  },
  title: {
    fontFamily: 'body',
    fontSize: ['14px', null, '28px', null, null, '45px', null, '52px'],
    color: 'white',
    lineHeight: [1, null, null, 1],
    fontWeight: '700',
    letterSpacing: ['1px', null, '1px'],
    mt: '0%',
    py: 0,
    px: '5%',
    pt: '0%',
  },
  description: {
    fontFamily: 'body',
    fontSize: ['9px', 2, null, null, null, '13px', null, 3],
    color: 'white',
    lineHeight: [1, null, null, 1.3],
    px: [0, null, 5],
  },
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: ['column', 'row'],
    '[type="email"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: 'body',
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'heading',
      py: 1,
      px: [4, null, 6],
      backgroundColor: ['white', 'transparent'],
      height: ['52px', null, '60px'],
      textAlign: ['center', 'left'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
      },
      '::placeholder': {
        color: 'primary',
        opacity: 1,
      },
    },
    '.subscribe__btn': {
      flexShrink: 0,
      ml: [0, 2],
      backgroundColor: ['text', 'primary'],
      mt: [2, 0],
      py: ['15px'],
    },
  },
};
