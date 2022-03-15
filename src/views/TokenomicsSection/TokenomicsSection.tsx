import React from 'react'

import Roadmap from './components/Tokenomics'


interface Props {
    IsAutoPlay: boolean;
}

const TokenomicsSection: React.FC<Props> = ({ IsAutoPlay }) => {

    return (
        <main className="main p-tokenomics">
            <Roadmap />
        </main>
    )
}

export default TokenomicsSection
