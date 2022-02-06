/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

import Logo from 'components/logo';
import headerData from 'components/header/header.data';
import pool_icon from 'assets/pool_icon.svg';


// import Logo_target from 'assets/logo_target.svg';
import Logo_target from 'assets/circle_bg.png';


export default function PoolTarget() {
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
                <Heading as="h2" sx={styles.title_left}>PLATFORM</Heading>
                <Text as="p" sx={styles.description_left}>
                  THE GIVING POOL RAISES FUNDING FOR WORTHY AND CHARITABLE FOUNDATIONS - HANDPICKED BY $GIV HOLDERS.<br/><br/>
                  $GIV HOLDERS CAN CONNECT THEIR WALLETS TO VERIFY OWNERSHIP OF THE $GIV TOKEN. TOKEN HOLDERS
                  CAN PARTICIPATE IN THE “POOLS” VOTING TALLY. WHEN THE POOLS “TARGET VALUE” IS REACHED, THE
                  HIGHEST NOMINATED WILL RECEIVE A DONATION OF THE POOLS BALANCE. <br/><br/>
                  ALONGSIDE PARTICIPATING IN THE VOTING TALLY, THE $GIV TOKEN REWARDS HOLDERS WITH USDT AND
                  ENTERS THEM IN A CHANCE FOR GIVEAWAYS.<br/><br/>
                  LEARN MORE ABOUT THE GIV PLATFORM AND PARTICIPATE IN THE: DONATION, REWARD & GIVEAWAY ASPECTS – ON OUR DISCORD & SOCIAL MEDIA.<br/><br/>                    
                </Text>
                <Box sx={styles.containerBox_left}>
                    {headerData.socialItems.map(({ path, label, iconSrc }, i) => (
                        <a target="_blank" href={path}><img src={iconSrc} /></a>

                    ))} 
                </Box>
        </Box>

        <Box sx={styles.contentBox_center}>
          <Box sx={styles.contentBoxInner_center}>
            <Text as="p" sx={styles.title_center}>
              THE GIVING POOL
            </Text>
            <Box sx={styles.contentBox_target}>           
                  <Container sx={styles.containerBox_target}>
                      <Container sx={styles.containerBox_target_split}>
                          <Box  sx={styles.contentBoxInner1}>
                            <Box  sx={styles.contentBox_Targetvalue_Outer}>
                              <Box  sx={styles.contentBox_Targetvalue_Inner}>
                                  <Text as="p" sx={styles.text_target_blue}>
                                      TARGET VALUE:
                                  </Text>
                                  <Text as="p" sx={styles.text_target_red}>
                                      10 ETH
                                  </Text>
                              </Box> 
                            </Box> 
                            <Box  sx={styles.contentBox_Currentvalue_Outer}>
                              <Box  sx={styles.contentBox_Currentvalue_Inner}>
                                <Text as="p" sx={styles.text_target_blue}>
                                    CURRENT VALUE:
                                </Text>
                                <Text as="p" sx={styles.text_target_red}>
                                    5 ETH
                                </Text>
                              </Box> 
                            </Box>   
                          </Box> 
                          <Box  sx={styles.contentBox_Remaining_Outer}>
                            <Box  sx={styles.contentBox_Remaining_Inner}>
                                <Text as="p" sx={styles.text_target_blue}>
                                    REMAINING:
                                </Text>
                                <Text as="p" sx={styles.text_target_red}>
                                    5 ETH
                                </Text>
                            </Box>
                          </Box>                                        
                      </Container>
                      <Box  sx={styles.contentBox_target_Circle}>
                          
                          <Box  sx={styles.contentBox_Circle}>
                              {/* <Logo sx={styles.logo} src={pool_icon} path={'/'} /> */}
                          </Box>

                          <Text as="p" sx={styles.charityname_red}>
                             POOL #001 
                          </Text>
                      </Box>               
                  </Container>

                  <Text as="p" sx={styles.charityname}>
                          TALLY CANDIDATES   
                  </Text>
                  <Container sx={styles.containerBox_charity}>                
                      <Box sx={styles.contentBox_charity_rightborder}>                    
                          <Text as="p" sx={styles.charityname}>
                              CHARITY <br/>NAME1 
                          </Text>     
                          <Text as="p" sx={styles.percentage_blue}>
                              15,567 
                          </Text>               
                      </Box>
                      <Box sx={styles.contentBox_charity_rightborder}>                    
                          <Text as="p" sx={styles.charityname}>
                              CHARITY <br/>NAME2 
                          </Text>       
                          <Text as="p" sx={styles.percentage_red}>
                              15,567 
                          </Text>             
                      </Box>
                      <Box sx={styles.contentBox_charity_rightborder}>                    
                          <Text as="p" sx={styles.charityname}>
                              CHARITY <br/>NAME3 
                          </Text>     
                          <Text as="p" sx={styles.percentage_blue}>
                              15,567 
                          </Text>               
                      </Box>
                      <Box sx={styles.contentBox_charity_rightborder}>                    
                          <Text as="p" sx={styles.charityname}>
                              CHARITY <br/>NAME4 
                          </Text>   
                          <Text as="p" sx={styles.percentage_red}>
                              15,567 
                          </Text>                 
                      </Box>
                      <Box sx={styles.contentBox_charity}>                    
                          <Text as="p" sx={styles.charityname}>
                              CHARITY <br/>NAME5 
                          </Text>      
                          <Text as="p" sx={styles.percentage_blue}>
                              15,567 
                          </Text>              
                      </Box>
                  </Container>
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
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: ['wrap', null, null, 'nowrap'],
      pb: [0, 2, 0, null, 2],
      pt: [0, 3, 0, null, 3],
      px: '10%',
      width: '-webkit-fill-available',
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
      py: '5px',
      textShadow: '3px 3px #00000040',

  },
  title_left_red: {
      fontFamily: 'body',
      fontSize: ['14px', null, '24px', null, null, '36px', null, '40px'],
      color: '#E34358',
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
      width: '70%',
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
      transform: 'translate(0%, -80%)',
      width: ['60%', null, '60%', '60%'],
      borderRadius: 30,
      background: 'linear-gradient(270.17deg, #1C337E 14.88%, #F9FAFF 89.04%, #F9FAFF 89.04%)',
      textAlign: 'center',
      fontFamily: 'body',
      fontSize: ['15px', null, '25px', null, null, '35px', null, '45px'],
      color: 'textTitlecolor',
      lineHeight: [1, null, null, 1],
      fontWeight: '900',
      letterSpacing: ['1px', null, '1px'],
      mr: 'auto',
      ml: 'auto',
      py: '3%',
      // mb: '4%',
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
    pt: '170px',
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
  contentBox_target: {
    backgroundColor: 'transparent',
    // py: ['30px', null, '30px'],
    width: '100%',
    // height: '90px',
  },
  contentBox_target_Circle: {
    width: 'inherit',
  },

  containerBox_target: {
    // background: 'linear-gradient(89.95deg, #FFFFFF 0.66%, rgba(28, 51, 126, 0.13) 49.77%, #FFFFFF 97.86%)',
    // borderRadius: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    px: '5%',
    width: '98%',
    mx: '1%',
    pb: '3%',
  },
  containerBox_target_split: {
    // background: 'linear-gradient(89.95deg, #FFFFFF 0.66%, rgba(28, 51, 126, 0.13) 49.77%, #FFFFFF 97.86%)',
    // borderRadius: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    px: '5%',
    width: '42%',
    mx: '4%',
    pb: '3%',
  },
  containerBox_charity: {
    background: 'linear-gradient(89.95deg, #FFFFFF 0.66%, rgba(28, 51, 126, 0.13) 49.77%, #FFFFFF 97.86%)',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    px: '5%',
    width: '80%',
    mx: '10%',
  },

  contentBox_charity: {
    
    backgroundColor: 'transparent',
    py: ['10px', null, '20px'],
    width: '48%',
    height: '89%',    
  },
  contentBox_charity_rightborder: {
    // border: 
    // borderLeft: '2px solid',
    borderRight: '2px solid',
    borderColor: 'primary',
    backgroundColor: 'transparent',
    py: ['10px', null, '20px'],
    width: '48%',
    height: '89%',    
  },
  charityname: {
    fontFamily: 'body',
    fontWeight: '900',
    fontSize: ['5px', 2, null, null, null, '8px', null, 3],
    color: '#0B1A4C',
    textAlign: 'center',
    lineHeight: [1, null, null, 1.3],
    px: [0, null, 5],
    borderRadius : '1',
    border: '1',
    mb: '5px',
    textShadow: '2px 2px #00000040',

  },
  charityname_red: {
    fontFamily: 'body',
    fontWeight: '900',
    fontSize: ['8px', 3, null, null, null, '12px', null, 3],
    color: '#E34358',
    textAlign: 'center',
    lineHeight: [1, null, null, 1.3],
    px: [0, null, 5],
    borderRadius : '1',
    border: '1',
    mb: '5px',
    '-webkit-text-stroke': '1px #1C337E',
  },
  percentage_red: {
    fontFamily: 'body',
    color: '#E34358',
    fontSize: ['4px', 2, null, null, null, '5px', null, 3],
    textAlign: 'center',
    lineHeight: [1, null, null, 1.3],
    px: [0, null, 5],
    mt: '4%',
    // pb: '1px',
  },
  percentage_blue: {
    fontFamily: 'body',
    color: '#0B1A4C',
    fontSize: ['4px', 2, null, null, null, '5px', null, 3],
    textAlign: 'center',
    lineHeight: [1, null, null, 1.3],
    px: [0, null, 5],
    mt: '4%',
    // pb: '1px',
  },


  text_target_blue: {
    fontFamily: 'body',
    fontWeight: '900',
    fontSize: ['0.3em', '0.45em', '0.45em', '0.6em', '0.75em', '0.8', '0.8em', '0.8em'],
    color: '#1C337E',
    textAlign: 'center',
    lineHeight: [1, null, null, 1.3],
    px: [0, null, 5],
    borderRadius : '1',
    border: '1',
    mb: '5px',
  },
  text_target_red: {
    fontFamily: 'body',
    fontWeight: '900',
    // fontSize: '1.5em',
    fontSize: ['0.3em', 2, '0.45em', '0.6em', '0.75em', '1em', null, 3],
    color: '#E34358',
    textAlign: 'center',
    lineHeight: [1, null, null, 1.3],
    px: [0, null, 5],
    borderRadius : '1',
    border: '1',
    mb: '5px',
  },
  logo:{
    px: '5%',
    pb: '2%',
  },
  contentBox_Remaining_Inner: {
    // position: 'relative'
  },
  contentBox_Remaining_Outer: {
    position: 'relative',
    top: '40%'
  },
  contentBox_Targetvalue_Inner: {
    // position: 'relative'
  },
  contentBox_Targetvalue_Outer: {
    position: 'relative',
    top: '15%'
  },
  contentBox_Currentvalue_Inner: {
    // position: 'relative'
  },
  contentBox_Currentvalue_Outer: {
    position: 'relative',
    top: '50%'
  },

  contentBox_Circle: {
    backgroundImage: `url(${Logo_target})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: '100%',
    height: 'calc(100vw - 80vw)',
    width : '60%',
    margin: 'auto',
  }
};
