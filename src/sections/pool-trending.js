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
      <section class="token" id="token">
        <div class="c-grid">
          <div class="token__wrapper">
            <div class="token__wrapper-left">
              <h2 class="token__title">the giving Token: <span>$GIV</span></h2>
              <div class="token__section">
                <p>$GIV Token Address: 0x764cF690A710853B4ac02A3d48cb12c12eB18f4A</p>
                <p>$GIV is created with a Tax structure that enables a constant flow of fundraising and rewards.</p>
                <p>10% transaction fee – This fee gets split up and redistributed.</p>
                <p>5% to be converted to ETH and fund to the Giving Pool</p>
                <p>5% to be converted to USDT and distributed into the wallets of $GIV holders</p>
                <p>A locked Giveaway wallet is created to earn rewards and host giveaways / airdrops throughout the community.</p>
              </div>
            </div>
            <div class="token__wrapper-middle">
              <div class="roadmap__block">
                <h3 class="roadmap__block-title">Pool Candidates</h3>
                <ul class="roadmap__box">
                  <li>Candidate name (link to site) and description</li>
                  <li>Candidate name (link to site) and description</li>
                  <li>Candidate name (link to site) and description</li>
                  <li>Candidate name (link to site) and description</li>
                  <li>Candidate name (link to site) and description</li>
                </ul>
              </div>
            </div>
            <div class="token__wrapper-right">
              <div class="roadmap__block">
                <h3 class="roadmap__block-title">Trending on GIV</h3>
                <ul class="roadmap__box">
                  <li>Article name and description:</li>
                  <li>Article name and description:</li>
                  <li>Article name and description:</li>
                  <li>Article name and description:</li>
                  <li>Article name and description:</li>
                </ul>
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
