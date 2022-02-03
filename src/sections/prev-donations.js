/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

import Logo from 'components/logo';
import Eclipse from 'assets/eclipse_1_m.svg';

export default function PrevDonations() {
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

        <Box sx={styles.contentBox_center}>
          <Box sx={styles.contentBoxInner_center}>
            <Text as="p" sx={styles.title_center}>
              PREVIOUS DONATIONS
            </Text>
            <Box sx={styles.textContentBoxInner_center}>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>POOL DATE :</Heading>
                    <Heading as="h2" sx={styles.description_red}> FEBRUARY 20TH, 2022</Heading>
                </Box>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>| POOL SIZE : </Heading>
                    <Heading as="h2" sx={styles.description_red}>10 ETH</Heading>
                </Box>
                <br/>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>RECIPIENT :</Heading>
                    <Heading as="h2" sx={styles.description_red}>CHARITY NAME</Heading>
                </Box>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>POOL DATE :</Heading>
                    <Heading as="h2" sx={styles.description_red}> FEBRUARY 20TH, 2022</Heading>
                </Box>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>| POOL SIZE : </Heading>
                    <Heading as="h2" sx={styles.description_red}>10 ETH</Heading>
                </Box>
                <br/>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>RECIPIENT :</Heading>
                    <Heading as="h2" sx={styles.description_red}>CHARITY NAME</Heading>
                </Box>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>POOL DATE :</Heading>
                    <Heading as="h2" sx={styles.description_red}> FEBRUARY 20TH, 2022</Heading>
                </Box>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>| POOL SIZE : </Heading>
                    <Heading as="h2" sx={styles.description_red}>10 ETH</Heading>
                </Box>
                <br/>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>RECIPIENT :</Heading>
                    <Heading as="h2" sx={styles.description_red}>CHARITY NAME</Heading>
                </Box>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>POOL DATE :</Heading>
                    <Heading as="h2" sx={styles.description_red}> FEBRUARY 20TH, 2022</Heading>
                </Box>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>| POOL SIZE : </Heading>
                    <Heading as="h2" sx={styles.description_red}>10 ETH</Heading>
                </Box>
                <br/>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>RECIPIENT :</Heading>
                    <Heading as="h2" sx={styles.description_red}>CHARITY NAME</Heading>
                </Box>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>POOL DATE :</Heading>
                    <Heading as="h2" sx={styles.description_red}> FEBRUARY 20TH, 2022</Heading>
                </Box>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>| POOL SIZE : </Heading>
                    <Heading as="h2" sx={styles.description_red}>10 ETH</Heading>
                </Box>
                <br/>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.description}>RECIPIENT :</Heading>
                    <Heading as="h2" sx={styles.description_red}>CHARITY NAME</Heading>
                </Box>
            </Box>
              
          </Box>
        </Box>  
      </Container>
    </section>
  );
}

const styles = {
    
        containerBox_left: {
          display: 'inline-flex',
          // alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: ['wrap', null, null, 'nowrap'],
          pb: [0, 2, 0, null, 2],
          pt: [0, 1, 0, null, 1],
        },
      title_left: {
          textAlign: 'left',
          fontFamily: 'body',
          fontSize: ['14px', null, '24px', null, null, '36px', null, '40px'],
          color: 'white',
          fontWeight: '900',
          letterSpacing: ['1px', null, '1px'],
          lineHeight: [1.3, null, null, 1.25],
          px: [0, null, 2],
      },
      title_left_red: {
          fontFamily: 'body',
          fontSize: ['14px', null, '24px', null, null, '36px', null, '40px'],
          color: '#eb8368',
          lineHeight: [1.3, null, null, 1.25],
          fontWeight: '900',
          letterSpacing: ['1px', null, '1px'],
      },
      description_left: {
          borderRadius: 30,
          backgroundColor: '#000e38',
          fontFamily: 'body',
          fontWeight: '700',
          fontSize: ['8px', null, '12px', null, null, '14px', null, '17px'],
          color: 'white',
          lineHeight: [1, null, null, 1.3],
          letterSpacing: ['2px', null, '3px'],
          overflowWrap: 'anywhere',
          py: [0, null, 3],
          px: [0, null, 2],
      },


    contentBox_center: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%', 
        mt: '10px', 
        pt: [0, 1, 0, null, 1],
        px: [0, 2, 0, null, 2],
    },

    contentBoxInner_center: {
        width: ['100%', null, '100%', '100%'],
        height: ['max-content', null, 'max-content', 'max-content'],
        mx: '0px',
        textAlign: 'left',
        borderRadius: 30,
        pt: '40px',
        px: [1, 1], 
        pb: '40px', 
        // mb: '50px', 
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2904) 0%, rgba(255, 255, 255, 0.5368) 100%)',
        backgroundColor: 'transparent',
    },
    textContentBoxInner_center: {
        transform: 'translate(0%, -50%)',
        width: ['84%', null, '84%', '84%'],
        height: ['max-content', null, 'max-content', 'max-content'],
        mx: '8%',
        textAlign: 'left',
        borderRadius: 30,
        px: [1, 1],
        background: 'linear-gradient(270deg, #1C337E 15%, #3853AD 89%)', 
        py: 4, 
        my: '1%',
        px: '6%',
    },
    title_center_box: {
        position: 'relative',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        align: 'center',
        height: '150px',
    },
    title_center: {
      position: 'relative',
      transform: 'translate(0%, -80%)',
      
        width: ['80%', null, '80%', '80%'],
        borderRadius: 30,
        background: 'linear-gradient(270.17deg, #1C337E 14.88%, #F9FAFF 89.04%, #F9FAFF 89.04%)',
        textAlign: 'center',
        fontFamily: 'body',
        fontSize: ['10px', null, '20px', null, null, '35px', null, '45px'],
        color: 'textTitlecolor',
        lineHeight: [1, null, null, 1],
        fontWeight: '900',
        letterSpacing: ['1px', null, '1px'],
        mr: 'auto',
        ml: 'auto',
        py: '3%',
        // mb: '4%',
    },

    description: {
        fontFamily: 'body',
        fontWeight: '700',
        fontSize: ['8px', null, '10px', null, null, '14px', null, '16px'],
        color: 'white',
        lineHeight: [1, null, null, 1.3],
        letterSpacing: ['2px', null, '3px'],
        overflowWrap: 'anywhere',
        px: [0, null, 2],  
    },
    description_red: {
      fontFamily: 'body',
      fontWeight: '700',
      fontSize: ['8px', null, '10px', null, null, '14px', null, '16px'],
      color: '#eb8368',
      lineHeight: [1, null, null, 1.3],
      letterSpacing: ['2px', null, '3px'],
      overflowWrap: 'anywhere',
      px: [0, null, 2],  
  },


  containerBox: {
    pt: '50px',
    display: '-webkit-box',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    width : '100%',
    maxWidth: [
        '80%',
        null,
        null,
        '80%',
        '80%',
        '80%',
        null,
        '80%',
      ],
  },
};
