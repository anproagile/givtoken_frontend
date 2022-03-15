import React from 'react'

import LimitedSale from './components/Limitedsale'


interface Props {
    IsAutoPlay: boolean;
}

const LimitedsaleSection: React.FC<Props> = ({ IsAutoPlay }) => {

    return (
        <main className="main p-homepage">
            <LimitedSale />
        </main>
    )
}

export default LimitedsaleSection
