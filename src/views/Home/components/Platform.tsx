import React from 'react'

const Platform = () => {
    return (
        <section className="platform" id="platform">
            <div className="c-grid">
                <div className="platform__wrapper">
                    <div className="platform__wrapper-left">
                        <h1 className="platform__title">the giving platform</h1>
                        <div className="platform__section">
                            <p>The Giving Pool raises funding for  worthy and charitable foundations - handpicked by $GIV holders.</p>
                            <p>$GIV holders can connect their wallets to verify ownership of the $GIV Token. Token holders can participate in the “Pools” voting tally. When the pools “Target Value” is reached, the highest nominated will receive a donation of the pools balance.</p>
                            <p>Alongside participating in the voting tally, The $GIV Token rewards holders with USDT and enters them in a chance for giveaways.</p>
                            <p>Learn more about The GIV Platform and participate in the: Donation, Reward & Giveaway aspects – on our Discord & Social Media.</p>
                        </div>
                        <ul className="footer__social">
                            <li>
                                <a href="https://discord.gg/4zDw4bGdke" rel="noreferrer" target="_blank">
                                    <img src="img/discord.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/TheGivingPool" rel="noreferrer" target="_blank">
                                    <img src="img/telegram.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://mobile.twitter.com/givingpool" rel="noreferrer" target="_blank">
                                    <img src="img/twitter.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/thegivingpool.io/" rel="noreferrer" target="_blank">
                                    <img src="img/instagram.png" srcSet="img/instagram@2x.png 2x" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="platform__wrapper-right">
                        <div className="roadmap__block">
                            <h1 className="roadmap__block-title">The Giving <br />Pool</h1>
                            <div className="platform__box">
                                <div>
                                    <ul className="platform__list">
                                        <li>
                                            <div>
                                                <p>Target Value:</p><span>10 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <p>Remaining:</p><span>TBD</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <p>CURRENT VALUE:</p><span>TBD</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div><img src="img/img-platform.png" srcSet="img/img-platform@2x.png" alt="" />
                                    <p className="platform__box-name">Pool #001</p>
                                </div>
                            </div>
                            <div className="platform__table-wrapper">
                                <p className="platform__table-title">Tally Candidates</p>
                                <div className="platform__table">
                                    <div>
                                        <div>
                                            <p>WorldVision</p><span />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>PeduliAnak</p><span />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>the digital <br />Ukraine</p><span />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>LunchBowl <br />Network</p><span><i /></span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Matwproject</p><span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Platform
