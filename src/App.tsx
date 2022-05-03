import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Router, Route, Switch, useLocation } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from 'style/Global'
import PageLoader from 'components/PageLoader'
import CurrentBlockWrapper from 'components/CurrentBlockWrapper'
import Header from 'components/Header'
import Footer from 'components/Footer/Footer'
import BackgroundMusic from 'components/BackgroundMusic'
import usePersistConnect from 'hooks/usePersistConnect'
import useBackgroundMusic from 'hooks/useBackgroundMusic';
import history from './routerHistory'

const NotFound = lazy(() => import('./views/NotFound'))
const Home = lazy(() => import('./views/Home'))
const WhitePaperSection = lazy(() => import('./views/WhitePaperSection'))
const RoadmapSection = lazy(() => import('./views/RoadmapSection'))
const TokenomicsSection = lazy(() => import('./views/TokenomicsSection'))
const LimitedSaleSection = lazy(() => import('./views/LimitedSaleSection'))


// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0)
  }, [pathname])



  return null
}

const MINT_PARTY_AUDIO_URL = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644311286/CryptoPuffies_Track_MASTER_lotgfy.mp3';

const App: React.FC = () => {
  const [, setVolume] = useBackgroundMusic(MINT_PARTY_AUDIO_URL);
  const [volumeValue, setVolumeValue] = useState(0);
  const [IsAutoPlay, setIsAutoPlay] = useState(false);

  const setMusicVolume = (volume: number) => {
    setIsAutoPlay(true);
    setVolumeValue(volume);
    setVolume(volume);
  }
  useFetchPublicData()
  usePersistConnect()


  useEffect(() => {
    const onScroll: EventListener = (event: Event) => { // <-- DOM-EventListener
      // console.log("Scrolling event in App", event.target);
    };

    const win: Window = window;   // <-- DOM-Window, extends DOM-EventTarget
    win.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router history={history}>
      {/* <GlobalStyle /> */}
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        {/* <BackgroundMusic setMusicVolume={setMusicVolume} volumeValue={volumeValue} /> */}
        {/* <div className="c-modal mfp-hide mfp-with-anim" id="welcomeModal">
          <div className="c-modal__body"><a href="/" popup-close-js>Continue to website</a></div>
        </div><a href="#welcomeModal" data-effect="mfp-zoom-in" popup-js>Close</a> */}
        <Header />
        <BackgroundImage />
        <Switch>
          <Route path="/home" exact>
            <Home IsAutoPlay={IsAutoPlay} />
          </Route>
          <Route path="/whitepaper" exact>
            <WhitePaperSection IsAutoPlay={IsAutoPlay} />
          </Route>
          <Route path="/roadmap" exact>
            <RoadmapSection IsAutoPlay={IsAutoPlay} />
          </Route>
          <Route path="/tokenomics" exact>
            <TokenomicsSection IsAutoPlay={IsAutoPlay} />
          </Route>
          <Route path="/" exact>
            <LimitedSaleSection IsAutoPlay={IsAutoPlay} />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />

      </Suspense>
      <CurrentBlockWrapper />
    </Router>
  )
}

const BackgroundImage = styled.div`
  background-image: url('/img/img-bg@2x.png');
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

export default React.memo(App)
