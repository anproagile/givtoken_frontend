import React from 'react'
import styled from 'styled-components'
import { Flex, ResetCSS } from 'penguinfinance-uikit2'

const BackgroundMusic = ({ setMusicVolume, volumeValue }) => {
    const handleMusicVolume = () => {
        if (volumeValue === 0.01) {
            setMusicVolume(0.1);
            // set volume to 10%
        } else if (volumeValue === 0.1) {
            // set volume to 100%
            setMusicVolume(0);
        } 
        // else if (volumeValue === 1) {
        //     console.log('currentVolume : ', '0');
        //     // set Music turn 
        //     setMusicVolume(0);
        // } 
        else if (volumeValue === 0) {
            setMusicVolume(0.01);
        }
    }

    // useEffect(() => {
    //   initialAutoPlay();
    //   // handleMusicVolume();
    // }, [])

    // const handleMusicVolume = useCallback(
    //   () => {
    //     if (volumeValue === 0.01) {
    //       console.log('currentVolume : ', '0.1');
    //       setMusicVolume(0.1);
    //       // set volume to 10%
    //     } else if (volumeValue === 0.1) {
    //       console.log('currentVolume : ', '1');
    //       // set volume to 100%
    //       setMusicVolume(1);
    //     } else if (volumeValue === 1) {
    //       console.log('currentVolume : ', '0');
    //       // set Music turn 
    //       setMusicVolume(0);
    //     } else if (volumeValue === 0) {
    //       console.log('currentVolume : ', '0.01');
    //       setMusicVolume(0.01);
    //     }
    //   }
    // );

    const renderMusicButton = (): string => {
        switch (volumeValue) {
            case 0.01:
                return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_0.png`;
            case 0.1:
                return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_2.png`;
            // case 1:
            //     return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_2.png`;
            case 0:
            default:
                return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_mute.png`;
        }
    };

    // useEffect(() => {
    //   console.log('initial load 1213');

    //   if (!IsAutoPlay) {
    //     handleMusicVolume();
    //     setIsAutoPlay(true);

    //   }
    // }, [IsAutoPlay, setIsAutoPlay, handleMusicVolume])

    return (
        <Section>
            <ResetCSS />
            <MusicButtonContainer>
                <Flex>
                    <div onClick={handleMusicVolume} aria-hidden="true">
                        <PlayerImg
                            src={renderMusicButton()}
                            alt='volume' />
                    </div>
                </Flex>
            </MusicButtonContainer>
        </Section>
    )
}

export const PlayerImg = styled.img`

  // padding-left: 20px,
  // padding-right: 20px,
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:last-child {
    margin-left: 28px;
  }
  // @media (min-width: 768px) {
  //   width: 40px;
  //   height: 40px;
  // }
  // @media (min-width: 1200px) {
  //   width: 50px;
  //   height: 50px;
  // }
  // @media (min-width: 1400px) {
  //   margin-left: 16px;
  // }
`;

const MusicButtonContainer = styled(Flex)`
  width: 60px;
  height: 60px;
  z-index: 100;
  position: fixed;
  right: 40px;
  bottom: 45px;

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
    right: 50px;
    bottom: 45px;
  }
  @media (min-width: 1200px) {
    width: 100px;
    height: 100px;
    right: 70px;
    bottom: 45px;
  }
  @media (min-width: 1440px) {
    width: 100px;
    height: 100px;
    right: 90px;
    bottom: 65px;
    // padding: 0px 105px 0px 105px;
  }

  & svg {
    cursor: pointer;
  }
`
const Section = styled.div`
  position: relative;
  position: absolute;
  width: 100%;
  height: 100%
  z-index: 100;
`;


export default BackgroundMusic
