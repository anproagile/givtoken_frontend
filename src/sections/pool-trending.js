/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

import Logo from 'components/logo';
import Eclipse from 'assets/eclipse_1_m.svg';

export default function PoolTrending() {
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
        
        <Box sx={styles.contentBox_left}>
                <Heading as="h2" sx={styles.title_left}>
                    THE GIVING
                </Heading>
                <Box sx={styles.containerBox_left}>
                    <Heading as="h2" sx={styles.title_left}>TOKEN :</Heading>
                    <Heading as="h2" sx={styles.title_left_red}>$GIV</Heading>
                </Box>
                
                <Text as="p" sx={styles.description_left}>
                    $GIV TOKEN ADDRESS:<br/>0X764CF690A710853B4AC02A3D48CB12C12EB18F4A<br/><br/>$GIVE IS CREATED WITH A TAX STRUCTURE THAT ENABLE A CONSTANT FLOW OF FUNDRAISING AND REWARDS.<br/><br/>
                    10% TRANSACTION FEE - THIS FEE GETS SPLIT UP AND REDISTRIBUTED.<br/><br/>
                    &nbsp;• 5% TO BE CONVERTED TO ETH AND FUND TO THE GIVING POOL<br/><br/>
                    &nbsp;• 5% TO BE CONVERTED TO USDT AND DISTRIBUTED INTO THE WALLETS OF $GIV HOLDERS<br/><br/>
                    A LOCKED GIVEAWAY WALLET IS CREATED TO EARN REWARDS AND HOST GIVEAWAYS / AIRDROPS THROUGHOUT THE COMMUNITY<br/><br/>                    
                </Text>
        </Box>

        <Box sx={styles.contentBox_center}>
          <Box sx={styles.contentBoxInner_center}>
            <Text as="p" sx={styles.title_center}>
              POOL CANDIDATES
            </Text>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                CANDIDATE NAME AND DESCRIPTION
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                CANDIDATE NAME AND DESCRIPTION
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                CANDIDATE NAME AND DESCRIPTION
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                CANDIDATE NAME AND DESCRIPTION
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                CANDIDATE NAME AND DESCRIPTION
              </Text>
            </Box>            
          </Box>
        </Box>   
        <Box sx={styles.contentBox_center}>
          <Box sx={styles.contentBoxInner_center}>
            {/* <Box sx={styles.title_center_box}> */}
                <Text as="p" sx={styles.title_center}>
                    TRENDING ON GIV
                </Text>
            {/* </Box> */}

            
            
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                ARTICLE AND NAME DESCRIPTION:
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                ARTICLE AND NAME DESCRIPTION:
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                ARTICLE AND NAME DESCRIPTION:
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                ARTICLE AND NAME DESCRIPTION:
              </Text>
            </Box>
            <Box sx={styles.textContentBoxInner_center}>
              <Text as="p" sx={styles.description}>
                ARTICLE AND NAME DESCRIPTION:
              </Text>
            </Box>            
          </Box>
        </Box>  
      </Container>
    </section>
  );
}

const styles = {
    

    contentBox_left: {
        backgroundColor: 'transparent',
        width: '30%',
        height: '100%',  
        pt: [0, 1, 0, null, 1],
        px: [0, 4, 0, null, 4],
  
    },
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
        textShadow: '3px 3px #00000040',

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
        py: [0, null, 5],
        px: '3%',
    },

    contentBox_center: {
        backgroundColor: 'transparent',
        width: '35%',
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
        width: ['94%', null, '94%', '94%'],
        height: ['max-content', null, 'max-content', 'max-content'],
        mx: '3%',
        textAlign: 'left',
        borderRadius: 30,
        px: [1, 1],
        background: 'linear-gradient(270deg, #1C337E 15%, #3853AD 89%)', 
        py: 4, 
        my: '5%',
    },
    title_center_box: {
        // position: 'relative',
        // transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        align: 'center',
        height: '150px',
    },
    title_center: {

        width: ['80%', null, '80%', '80%'],
        borderRadius: 30,
        background: 'linear-gradient(270.17deg, #1C337E 14.88%, #F9FAFF 89.04%, #F9FAFF 89.04%)',
        textAlign: 'center',
        fontFamily: 'body',
        fontSize: ['10px', null, '20px', null, null, '30px', null, '35px'],
        color: 'textTitlecolor',
        lineHeight: [1, null, null, 1],
        fontWeight: '900',
        letterSpacing: ['1px', null, '1px'],
        mr: 'auto',
        ml: 'auto',
        py: '3%',
        mb: '4%',
        textShadow: '3px 3px #00000040',

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


  containerBox: {
    pt: '50px',
    display: '-webkit-box',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    width : '100%',
    maxWidth: [
        '94%',
        null,
        null,
        '94%',
        '94%',
        '94%',
        null,
        '94%',
      ],
  },
};
