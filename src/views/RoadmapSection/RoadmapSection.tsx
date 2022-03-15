import React from 'react'

import Roadmap from './components/Roadmap'


interface Props {
    IsAutoPlay: boolean;
}

const RoadmapSection: React.FC<Props> = ({ IsAutoPlay }) => {

    return (
        <main className="main p-roadmap">
            <Roadmap />
        </main>
    )
}

export default RoadmapSection
