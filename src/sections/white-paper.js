/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Image, Box, Button, Input, Text, Heading } from 'theme-ui';
import WhitePaperCircle from 'assets/whitepapercircle.svg';


export default function WhitePaper() {
  return (
    <section id="whitepaper" sx={{ variant: 'section.whitepaper' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              WHITE PAPER
            </Heading>
            <Box sx={styles.textContentBoxInner}>
              
              <Text as="p" sx={styles.inner_title}>
                OUR MISSION
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                  DECENTRALIZATION IS ENTERING NEARLY EVERY FACET OF LIFE AS WE KNOW IT AND WILL CONTINUE FOR THE FORESEEABLE FUTURE. WE BELIEVE CHARITY SHOULD BE NO DIFFERENT. DECENTRALIZING HOW WE DONATE WILL HELP MERGING CHARITIES TO ADVOCATOR, ADVERTISE AND RECEIVE DONATIONS VIA THE GIV FOUNDATION AND OUR COMMUNITY, THE GIVING PLATFORM WAS CREATED TO ALLOW PEOPLE FROM AROUND THE GLOBE TO SHARE, INVITE AND VOTE ON REPUTATBLE CHARITIES TO RECEIVE DONATIONS.
                  CHARITABLE ORGANIZATIONS THAT PROVIDE FOR SMALLER & LESSER-KNOWN CAUSES, CONSTANTLY NEED DONATIONS TO JUMPSTART AND COMPLETE THEIR MISSIOIN. NON-PROFITS, RESOLVING REAL-WORLD CHALLENGES, NOW HAVE A PLATFORM TO GAIN RECORGNITION FROM A CONMMUNITY OF INDIVIDUALS THAT ACTIVELY SEEK REPUTABLE CHARITIES IN WHICH THEY DETERMINE THE ALLOCATION OF ALL FUNDS REISED. WE LOVE THE IDEA OF NEWCOMMERS ENTERING THE GAME AND ORGANIZING FOUNDATIONS THAT GIVE BACK. THAT'S WHY WE CREATED THE GIVING POOL & THE $GIV TOKEN.
                  WITH A COMMUNITY-DRIVEN FOUNDATION, THE GIVING PLATFORM ALLOWS FOR:
              </Text>
              
              <Image src={WhitePaperCircle} alt={'Mission'} sx={styles.img} />


              <Text as="p" sx={styles.inner_title}>
                THE IMPORTANCE OF CHARITY
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                CHARITY IS THE IDEA OF GIVING OUT RESOURCES - LIKE CURRENCY - TO GROUPS DEDICATED IN SAVING OUR WORLD’S VAST ECOSYSTEM.  EACH CHARITY HAS A MISSION TO ENSURE THE PROTECTION OF HUMAN RIGHTS AND ENVIRONMENTAL SAFETY. THESE SELFLESS ACTS OF GIVING BRING OUT OUR NATURAL ABILITY TO EVOLVE AS A SPECIES. BY HARVESTING THE POWER OF COMMUNITY, PEOPLE OF ALL BACKGROUNDS AND GENERATIONS COME TOGETHER IN UNITY TO SUSTAIN PEACE AND JUSTICE FOR THE LIVES OF OTHERS. THE INCREDIBLE GENEROSITY OF THESE INDIVIDUALS RESULTS IN POSITIVE TRANSFORMATION THROUGHOUT OUR WORLD.
                THIS ACT OF KINDNESS HAS BEEN AROUND FOR HUNDREDS OF YEARS MAINLY PRESERVING PUBLIC HEALTH, POVERTY, AND INEQUALITY. BUT THERE ARE OTHER GROUPS THAT HAVE UNIQUE OBJECTIVES THAT ARE EQUALLY IMPORTANT FOR EVOLVING.
             </Text>
              
              <Text as="p" sx={styles.inner_title}>
                RAISING AWARENESS
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                OVER 100,000 ORGANIZATIONS ARE ACTIVELY ORGANIZING CHARITY WORK THROUGHOUT THE GLOBE TODAY. WITH BIG NAMES LIKE THE WELCOME TRUST FOUNDATION, RED CROSS, ST JUDES AND OTHERS TAKING THE SPOTLIGHT IT IS SOMETIMES DIFFICULT FOR NEWER AND SMALLER GROUPS TO GET THE RECOGNITION THEY NEED.
                WE CREATED THE GIVING FOUNDATION TO PROMOTE CHARITIES OF ALL CATEGORIES AND ENTER THEM TO RECEIVE DONATIONS.  
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                CORE FOUNDATION OF GIV
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                IT ALL BEGINS WITH OUR UNIQUE APPROACH FOR CREATING A PLATFORM AND COMMUNITY THAT CONSTANTLY FUNDRAISES CHARITABLE GROUPS WHILE REWARDING TOKEN HOLDERS. WE ACCOMPLISHED THIS VISION BY INVENTING THE $GIV TOKEN & THE GIVING POOL.
                PEOPLE FROM AROUND THE WORLD WILL GATHER AND BRING RECOGNITION UPON A DIVERSE VARIETY OF CHARITABLE ASSOCIATIONS VIA OUR TELEGRAM & DISCORD CHANNEL.
                OUR GIV ADMINS WILL CAREFULLY REVIEW AND CHOOSE WORTHY CANDIDATES TO BE ENTERED INTO OUR TALLY LIST.
                ONCE AN ORGANIZATION IS VERIFIED, OUR DISCORD COMMUNITY WILL VOTE FOR WHO IS FEATURED IN THE GIVING POOL AND ALL $GIV TOKEN HOLDERS WILL BE ELIGIBLE TO VOTE ON WHO RECEIVES THAT DONATION.
                VISIT WWW.THEGIVINGPOOL.IO  TO VIEW THE POOLS STATISTICS AND TALLY LIST.  
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                THE IMPORTANCE OF THE GIVING POOL
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                THERE ARE TONS OF KNOWN AND UNKNOWN CHARITIES OUT THERE IN NEED OF  FUNDING  FOR  MANY DIFFERENT  PROJECTS. WE AIM TO GENERATE ETH FOR THESE ASSOCIATIONS ACTIVELY SOLVING REAL WORLD CONCERNS AND EMPOWERING RESOLVE. HERE IS A PLACE WHERE THE COMMUNITY HAS THE POWER TO CHOOSE WHAT THEIR MONEY IS ALLOCATED TOWARDS. 
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                THE GIVING POOL
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                WRITTEN IN $GIV TOKEN’S SMART CONTRACT IS A 10% TAX ON EVERY TRANSACTION. 5% OF THAT TAX IS CONVERTED INTO ETH AND SENT TO A WALLET THAT REPRESENTS “THE GIVING POOL.” THE PURPOSE OF THIS POOL IS  TO REACH  A  CERTAIN  AMOUNT  OF  ETH, AT  WHICH  POINT  IT  WILL BE  AUTOMATICALLY  DONATED  TO THE  VERIFIED  CHARITY  THAT  IS CHOSEN BY THE  COMMUNITY. 
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                HOW CHARITIES ARE CHOSEN
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                BY THE COMMUNITY, OF  COURSE. CHARITIES OF ALL SORTS ARE ENCOURAGED TO DETAIL THE WORK THEY’VE  DONE  AND  WHAT  THEY PLAN  TO DO IF  THE GIVING POOL WERE  TO SUPPORT  THEIR VISION. THEY CAN POST  LIVE  OUR  THE  DISCORD  TO THE  COMMUNITY IN  OUR  AMA  SESSION  THAT  WILL ALLOW  USERS  AND  HOLDERS  TO FIND  OUT  MORE ABOUT THE MISSION  AND  WHY THEY NEED  TO BE  FUNDS TO ACHIEVE IT.
                EVERY CYCLE, OUR ADMINS WILL REVIEW ALL CHARITIES PRESENTED BY THE COMMUNITY AND RELEASE A  POLL TO USERS  IN  OUR DISCORD AND TELEGRAM  SERVERS. VOTING WILL TAKE PLACE, BRINGING TO THE  LIGHT  LOCAL  AND NATIONAL CHARITIES  THAT  ARE  IMPORTANT  TO OUR  COMMUNITY. FROM HERE, THERE WILL BE A  ROUND  OF  RESEARCH  AND  APPROVAL OF  THOSE  WHO RISE TO THE  TOP.
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                HOW CHARITIES ARE CHOSEN
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                BY THE COMMUNITY, OF  COURSE. CHARITIES OF ALL SORTS ARE ENCOURAGED TO DETAIL THE WORK THEY’VE  DONE  AND  WHAT  THEY PLAN  TO DO IF  THE GIVING POOL WERE  TO SUPPORT  THEIR VISION. THEY CAN POST  LIVE  OUR  THE  DISCORD  TO THE  COMMUNITY IN  OUR  AMA  SESSION  THAT  WILL ALLOW  USERS  AND  HOLDERS  TO FIND  OUT  MORE ABOUT THE MISSION  AND  WHY THEY NEED  TO BE  FUNDS TO ACHIEVE IT.
                EVERY CYCLE, OUR ADMINS WILL REVIEW ALL CHARITIES PRESENTED BY THE COMMUNITY AND RELEASE A  POLL TO USERS  IN  OUR DISCORD AND TELEGRAM  SERVERS. VOTING WILL TAKE PLACE, BRINGING TO THE  LIGHT  LOCAL  AND NATIONAL CHARITIES  THAT  ARE  IMPORTANT  TO OUR  COMMUNITY. FROM HERE, THERE WILL BE A  ROUND  OF  RESEARCH  AND  APPROVAL OF  THOSE  WHO RISE TO THE  TOP.
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                THE TALLY LIST
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                TRENDING CANDIDATES THROUGHOUT THE GIV COMMUNITY  ARE ENTERED AS THE FINAL SELECTION TO BE FEATURED AS THE POOL’S CONTESTANTS. AS THE  POOL IS  FILLING, IF  YOU’RE  A  TOKEN  HOLDER, YOU’LL BE  ABLE  TO CONNECT TO THE DAPP  IN ORDER TO PROVE  OWNERSHIP OF THE $GIV TOKEN.  THE TOP VOTED WILL BE THE CHARITY RECEIVING THE POOLS DONATION UPON FULFILLMENT.
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                CHARITY GUIDELINES
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                PRETTY  IMPORTANT, RIGHT? THERE  ARE  A  LOT  OF  PEOPLE  IN  EVERY  COMMUNITY. NO MATTER WHAT  HAPPENS, THERE  MAY ALWAYS  BE  NON-QUALIFYING  CHARITIES  THAT  ARE RECOMMENDED TO USE TO ADD  TO OUR LIST. WE WILL BE  JUDGING  EVERY  CHARITY  THAT  IS  PRESENTED  WITH  THREE  SIMPLE  CRITERIA THAT  ALLOW  US  TO DETERMINE, AT  A  GLANCE, WHETHER  THEY  ARE  REAL CONTENDERS  FOR DONATION  OR NOT  WORTH  OUR (OR  THE  COMMUNITY’S) TIME.
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                CRYPTO-FRIENDLY
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                A CHARITY, NUMBER ONE, HAS  TO BE  ABLE  TO ACCEPT  CRYPTO CURRENCY  AND  UTILIZE IT  FOR  THEIR  PURPOSES.  
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                TAX STATUS
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                IT  IS  NOT  AN  END  ALL BE  ALL SINCE  WE  HAVE  THE  GOAL OF  HELPING  TO RAISE  UP LESSER-KNOWN AND  FUNDED  CHARITIES, BUT  YOUR CURRENT  TAX  STATUS, INCORPORATION STATUS, AND/OR  PLANS  FOR  BOTH  WILL BE  PART  OF  THE  CONSIDERATION  THAT  ADMINS PUT  INTO WHETHER OR  NOT  YOU CAN  BE  CONSIDERED.
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                THE GIVING TOKEN (GIV)
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                $GIV WAS DEVELOPED  AS AN ERC-20  TOKEN TO PROVIDE A CONSTANT STREAM OF FUNDING INTO THE GIVING POOL WHILE REWARDING HOLDERS. EACH TRANSACTION HAS A 10% TAX BUILT THAT WILL BE SPLIT IN HALF, CONVERTED, AND RECYCLED INTO THE COMMUNITY.
                5% WILL BE CONVERTED INTO ETH AND SENT TO THE POOL FOR FUNDING.
                5% WILL BE CONVERTED INTO USDT AND REDISTRIBUTED INTO THE WALLETS ON TOKEN HOLDERS.
                WE SET UP A GIVEAWAY WALLET THAT WILL BE LOCKED AND HOLD 15% OF THE CIRCULATING SUPPLY TO COLLECT REWARDS IN USDT AND HOST COMMUNITY GIVEAWAYS AND AIRDROPS.
                HERE IS  A  REWARD  SYSTEM  BUILT  INTO THE  STRUCTURE  OF  THE  TOKEN. AS YOU HOLD, YOU WILL CONTINUALLY  BE  REWARDED. THE BOTTOM LINE, THE $GIV TOKEN  IS MUCH MORE THAN JUST AN  INVESTMENT, IT’S A  TOOL  FOR GIVING. AND RECEIVING.  YOU CAN TAKE PART IN GIVING BACK TO THOSE IN NEED, WHILE ENJOYING YOUR INVESTMENT AND REWARD SYSTEM.
              </Text>
              
              <Text as="p" sx={styles.inner_title}>
                SUMMARY
              </Text>
              <p></p>
              <Text as="p" sx={styles.description}>
                  THE GIVING POOL AND THE GIVING TOKEN HAVE  A  SIMPLE  PURPOSE. DECENTRALIZATION  OF  THE  MACHINE  THAT  IS  CHARITY. WE  WANT  LOCAL AND  LESSER  KNOWN CHARITIES  WITH  THE  BEST  INTENTIONS  AND  LESS  OVERHEAD  TO HAVE  THEIR  CHANCE  TO SHINE  AND  PUT  MORE  OF  THE  USERS  DOLLARS  INTO WORK FOR  THE  END  USER. THE  ABILITY  TO INVEST  AND  BUILD  WEALTH  THROUGH  OUR  PLATFORM  IS  A  PLEASANT  BY-PRODUCT OF  THIS  VISION. WE HOPE YOU WILL CONSIDER GETTING  INVOLVED  IN  THE GIVING POOL.
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
  contentBox: {
    backgroundColor: 'transparent',
    py: ['30px', null, '30px'],
    
  },
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
  textContentBoxInner: {
    width: ['100%', null, '100%', '100%'],
    height: ['max-content', null, 'max-content', 'max-content'],
    mx: '0%',
    textAlign: 'center',
    borderRadius: 30,
    px: [1, 1],
    background: '#000e38', 
    py: 5, 
    mb: '2%',
  },
  title: {
    fontFamily: 'body',
    fontSize: ['14px', null, '28px', null, null, '45px', null, '52px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['3px', null, '3px'],
    mt: '3%',
    py: 2,
    px: '0%',
    pt: '6%',
    pb: '3%',
    mb: '1%',
  },
  inner_title: {
    fontFamily: 'body',
    fontSize: ['16px', null, '22px', null, null, '28px', null, '32px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '900',
    letterSpacing: ['3px', null, '3px'],
    mt: '1%',
    py: 2,
    px: '0%',
    pt: '3%',
  },
  description: {
    fontFamily: 'body',
    fontSize: ['10px', null, '12px', null, null, '15px', null, '18px'],
    color: 'white',
    fontWeight: '700',
    lineHeight: [1.3, null, null, 1.4],
    px: '3%',
    textTransform: 'upuppercase', 
  },
  img: {
    width: '25vw',
    height: '25vw',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  subscribeForm: {
    textTransform: 'upuppercase',    
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
