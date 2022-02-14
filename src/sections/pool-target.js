/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

import Logo from 'components/logo';
import headerData from 'components/header/header.data';
import pool_icon from 'assets/pool_icon.svg';
import Logo_target from 'assets/circle_bg.png';


import IMG_Platform from 'img/img-platform.png';
import IMG_Platform_2x from 'img/img-platform@2x.png';
import DiscordIcon  from 'img/discord.svg';
import TelegramIcon from 'img/telegram.svg';
import TwitterIcon from 'img/twitter.svg';
import InstagramIcon from 'img/instagram.png';
// import InstagramIcon_2x from 'img/instagram@2x.png';


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
      <section class="platform" id="platform">
        <div class="c-grid">
          <div class="platform__wrapper">
            <div class="platform__wrapper-left">
              <h1 class="platform__title">the giving platform</h1>
              <div class="platform__section">
                <p>The Giving Pool raises funding for  worthy and charitable foundations - handpicked by $GIV holders.</p>
                <p>$GIV holders can connect their wallets to verify ownership of the $GIV Token. Token holders can participate in the “Pools” voting tally. When the pools “Target Value” is reached, the highest nominated will receive a donation of the pools balance.</p>
                <p>Alongside participating in the voting tally, The $GIV Token rewards holders with USDT and enters them in a chance for giveaways.</p>
                <p>Learn more about The GIV Platform and participate in the: Donation, Reward & Giveaway aspects – on our Discord & Social Media.</p>
              </div>
              <ul class="footer__social">
                <li><a target="_blank" href="https://discord.gg/dYuWzKd5"><img src={DiscordIcon} alt=""></img></a></li>
                <li><a target="_blank" href="https://t.me/TheGivingPool"><img src={TelegramIcon} alt=""></img></a></li>
                <li><a target="_blank" href="https://mobile.twitter.com/givingpool"><img src={TwitterIcon} alt=""></img></a></li>
                <li><a target="_blank" href="https://www.instagram.com/thegivingpool.io/"><img src={InstagramIcon} alt=""></img></a></li>
              </ul>
            </div>
            <div class="platform__wrapper-right">
              <div class="roadmap__block">
                <h1 class="roadmap__block-title">The Giving <br/>Pool</h1>
                <div class="platform__box">
                  <div>
                    <ul class="platform__list">
                      <li>
                        <div>
                          <p>Target Value:</p><span>10 ETH</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>Remaining:</p><span>5 ETH</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>CURRENT VALUE:</p><span>5 ETH</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div><img src={IMG_Platform} srcset={IMG_Platform_2x} alt=""></img>
                    <p class="platform__box-name">Pool #001</p>
                  </div>
                </div>
                <div class="platform__table-wrapper">
                  <p class="platform__table-title">Tally Candidates</p>
                  <div class="platform__table">
                    <div>
                      <div>
                        <p>Charity <br/>name</p><span>8,965</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Charity <br/>name</p><span>12,582</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Charity <br/>name</p><span>3,327</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Charity <br/>name</p><span><i>8,965</i></span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>Charity <br/>name</p><span>6,174</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      borderRadius: 50,
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
