import React from 'react'

import Platform from './components/Platform';
import Token from './components/Token';
import Donations from './components/Donations';

interface Props {
  IsAutoPlay: boolean;
}

const Home: React.FC<Props> = ({ IsAutoPlay }) => {

  return (
    <>
      <main className="main p-home">
        <Platform />
        <Token />
        <Donations />
      </main>

    </>
  )
}

export default Home
