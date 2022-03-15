import React, { useState } from 'react'
import { Modal, Flex, Text } from 'penguinfinance-uikit2'
import styled from 'styled-components'

import CountDown from 'components/CountDown';

interface MintModalProps {
  // eslint-disable-next-line react/require-default-props
  onDismiss?: () => void
}

const MintModal: React.FC<MintModalProps> = ({ onDismiss }) => {
  const totalPuffies = 8888;
  const mintedPuffies = 8888;
  const [rarity, setRarity] = useState(0); 
  const startDate = 1644951600000;

  const handleMinusRarity = () => {
    if (rarity > 0) {
      setRarity(prev => prev - 1);
    }
  };

  const handlePlusRarity = () => {
    setRarity(prev => prev + 1);
  };

  return (
    <ModalWrapper>
      <Modal title="" hideCloseButton bodyPadding="8px 32px 32px 24px" onDismiss={onDismiss}>
        <Wrapper>
          <MintBannerImage1
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner1.png`}
            alt="mint banner 1" />
          <Flex flexDirection='column' alignItems='center' mr='16px'>
            <LogoImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/logo.png`}
              alt="mint logo" />
            <CollectionText>Cutest collection in <span>AVAX</span>!</CollectionText>
            <CountDownContainer>
              <CountDown date={startDate} />
            </CountDownContainer>
            <PuffyPartyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/puffy_party.png`}
              alt="mint logo" />
            <Flex alignItems='center' mt='20px'>
              <PuffyPartyText>Let’s PuggleParty! - Les Puffielers</PuffyPartyText>
              <Flex>
                <PlayerImg 
                  src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/stop.svg`}
                  alt='stop' />
                <PlayerImg 
                  src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/play.svg`}
                  alt='stop' />
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection='column' alignItems='center' mr='16px'>
            <PuffiesCountText mt='16px'>{`${mintedPuffies}/${totalPuffies}`}</PuffiesCountText>
            <PuffiesMintedText>Puffies Minted</PuffiesMintedText>
            <EggImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/egg.png`}
              alt="mint banner 2" />
            <RarityContainer justifyContent='space-between' alignItems='center'>
              <PlusMinusButton onClick={handleMinusRarity}>-</PlusMinusButton>
              <span>{rarity || '?'}</span>
              <PlusMinusButton onClick={handlePlusRarity}>+</PlusMinusButton>
            </RarityContainer>
            <Puggle justifyContent='center' alignItems='center'>{rarity ? 'Puggle Puggle!' : 'Waiting for Puggle'}</Puggle>
            <PuffyPerPrice>2 AVAX per Puffy</PuffyPerPrice>
            <PuffyPrice>{`Total: ${rarity ? rarity * 2 : '?'} AVAX`}</PuffyPrice>
          </Flex>
          <MintBannerImage2
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner2.png`}
            alt="mint banner 2" />
        </Wrapper>
      </Modal>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  z-index: 200;
  padding-top: 120px;
  &:first-child {
    margin-top: 120px;
  }
`;

const Wrapper = styled(Flex)`
`;

const MintBannerImage1 = styled.img`
  max-height: 70vh;
`;

const MintBannerImage2 = styled.img`
  max-height: 70vh;
`;

const EggImg = styled.img`
  max-height: 40vh;
`;

const PuffiesCountText = styled(Text)`
  font-family: 'Rowdies';
  font-size: 36px;
  line-height: 45px;
`;

const PuffiesMintedText = styled(Text)`
  font-size: 32px;
  line-height: 40px;
  font-family: 'Rowdies';
  color: #FA4D4B;
`;

const RarityContainer = styled(Flex)`
  background: #FA4D4B;
  font-size: 32px;
  line-height: 40px;
  font-family: 'Rowdies';
  border-radius: 100px;
  min-width: 240px;
  height: 48px;

  span {
    color: white;
    font-size: 32px;
    line-height: 40px;
    font-family: 'Rowdies';
  }
`;

const Puggle = styled(Flex)`
  background: #FA4D4B;
  font-size: 22px;
  line-height: 28px;
  font-family: 'Rowdies';
  min-width: 240px;
  height: 48px;
  border-radius: 100px;
  color: white;
  margin-top: 8px;
`;

const PlusMinusButton = styled.div`
  padding: 4px 16px;
  cursor: pointer;
`;

const PuffyPerPrice = styled(Text)`
  font-size: 20px;
  line-height: 25px;
  font-family: 'Rowdies';
  margin-top: 14px;
`;

const PuffyPrice = styled(Text)`
  font-size: 30px;
  line-height: 37px;
  font-family: 'Rowdies';
  color: #4FDAF7;
`;

const LogoImg = styled.img`
  margin-top: -160px;
  max-height: 320px;
  position: absolute;
`;

const CollectionText = styled(Text)`
  font-size: 28px;
  line-height: 36px;
  font-family: 'Rowdies';
  margin-top: 180px;

  span {
    font-family: 'Rowdies';
    color: #FA4D4B;
  }
`;

const CountDownContainer = styled.div`
  span {
    font-family: 'Rowdies';
    font-size: 36px;
    line-height: 44px;
  
    @media (min-width: 768px) {
      font-size: 44px;
      line-height: 54px;
    }
    @media (min-width: 968px) {
      font-size: 56px;
      line-height: 64px;
    }
    @media (min-width: 1200px) {
      font-size: 40px;
      line-height: 56px;
    }
  }
`;

const PuffyPartyImg = styled.img`
  max-height: 280px;
  margin-top: 10px;
`;

const PuffyPartyText = styled(Text)`
  font-family: 'Rowdies';
  font-size: 18px;
  line-height: 22px;
`;

const PlayerImg = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 16px;
  cursor: pointer;

  &:last-child {
    margin-left: 8px;
  }
`;

export default MintModal
