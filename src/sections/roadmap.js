/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

export default function Roadmap() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({    
  });
  return (
    <section id="roadmap" sx={{ variant: 'section.roadmap' }}>
      <section class="roadmap" id="roadmap">
        <div class="c-grid">
          <div class="roadmap__wrapper">
            <h2 class="roadmap__title">Roadmap</h2>
            <div class="roadmap__block">
              <h3 class="roadmap__block-title">STAGE 1</h3>
              <ul class="roadmap__box">
                <li>Deploy $GIV token’s Smart contract and dApp development</li>
                <li>Begin marketing</li>
                <li>Create Partnerships with charities for giv’s first pool</li>
                <li>Launch Pre-sale #1</li>
              </ul>
            </div>
            <div class="roadmap__block">
              <h3 class="roadmap__block-title">Stage 2</h3>
              <ul class="roadmap__box">
                <li>Begin Hosting discord and Telegegram discussions / polls</li>
                <li>Launch Pre-sale #2</li>
                <li>Start the first “giving pool”</li>
                <li>Launch Pre-sale #3</li>
              </ul>
            </div>
            <div class="roadmap__block">
              <h3 class="roadmap__block-title">Stage 3</h3>
              <ul class="roadmap__box">
                <li>Create community to actively seek and share charities for the pool</li>
                <li>Begin Pre-sale #4</li>
                <li>host Q&A meets with local charities</li>
                <li>Launch $GIV Public Sale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>

     
  );
}

const styles = {
  contentBoxInner: {
    width: ['100%', null, '100%', '100%'],
    height: ['max-content', null, 'max-content', 'max-content'],
    mx: '0px',
    textAlign: 'left',
    borderRadius: 30,
    px: [1, 1], 
    pb: '3px',  
    // backgroundColor: '#1C2F6C',
  },
  contentBox: {
    width: '100%',
    backgroundColor: 'transparent',
    py: ['20px', null, '20px'],
  },
  contentBox_stage: {
    pt: '20px',
    width : '100%',
    maxWidth: [
        '100%',
        null,
        null,
        '100%',
        '100%',
        '100%',
        null,
        '100%',
      ],
  },
  title: {
    fontFamily: 'body',
    fontSize: ['14px', null, '28px', null, null, '45px', null, '52px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '900',
    letterSpacing: ['3px', null, '3px'],
    mt: '3%',
    py: 2,
    px: '0%',
    // pt: '6%',
    pb: '3%',
    mb: '1%',
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
        mt: '50px', 
        pt: [0, 1, 0, null, 1],
        px: [0, 2, 0, null, 2],
    },

    contentBoxInner_center: {
        width: ['100%', null, '100%', '100%'],
        height: ['max-content', null, 'max-content', 'max-content'],
        // mx: '0px',
        textAlign: 'left',
        borderRadius: 30,
        pt: '40px',
        mt: '100px',
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
        // height: '150px',
    },
    title_center: {
      position: 'relative',
      transform: 'translate(0%, -80%)',
      
        width: ['40%', null, '40%', '40%'],
        borderRadius: 50,
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
    pt: '20px',
    display: '-webkit-box',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    width : '100%',
    maxWidth: [
        '100%',
        null,
        null,
        '100%',
        '100%',
        '100%',
        null,
        '100%',
      ],
  },
  containerBox_main: {
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