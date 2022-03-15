import React from 'react'

import WhitePaper from './components/WhitePaper'


interface Props {
  IsAutoPlay: boolean;
}

const WhitePaperSection: React.FC<Props> = ({ IsAutoPlay }) => {

  return (
    <main className="main p-whitepaper">
      <WhitePaper />
    </main>
  )
}

export default WhitePaperSection
