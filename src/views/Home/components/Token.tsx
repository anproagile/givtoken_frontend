import React from 'react'

const Token = () => {
    return (
        <section className="token" id="token">
            <div className="c-grid">
                <div className="token__wrapper">
                    <div className="token__wrapper-left">
                        <h2 className="token__title">the giving Token: <span>$GIV</span></h2>
                        <div className="token__section">
                            <p>$GIV Token Address: 0x764cF690A710853B4ac02A3d48cb12c12eB18f4A</p>
                            <p>$GIV is created with a Tax structure that enables a constant flow of fundraising and rewards.</p>
                            <p>10% transaction fee – This fee gets split up and redistributed.</p>
                            <p>5% to be converted to ETH and fund to the Giving Pool</p>
                            <p>5% to be converted to USDT and distributed into the wallets of $GIV holders</p>
                            <p>A locked Giveaway wallet is created to earn rewards and host giveaways / airdrops throughout the community.</p>
                        </div>
                    </div>
                    <div className="token__wrapper-middle">
                        <div className="roadmap__block">
                            <h3 className="roadmap__block-title">Pool Candidates</h3>
                            <ul className="roadmap__box">
                                <li>Candidate name (link to site) and description</li>
                                <li>Candidate name (link to site) and description</li>
                                <li>Candidate name (link to site) and description</li>
                                <li>Candidate name (link to site) and description</li>
                                <li>Candidate name (link to site) and description</li>
                            </ul>
                        </div>
                    </div>
                    <div className="token__wrapper-right">
                        <div className="roadmap__block">
                            <h3 className="roadmap__block-title">Trending on GIV</h3>
                            <ul className="roadmap__box">
                                <li>Article name and description:</li>
                                <li>Article name and description:</li>
                                <li>Article name and description:</li>
                                <li>Article name and description:</li>
                                <li>Article name and description:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Token
