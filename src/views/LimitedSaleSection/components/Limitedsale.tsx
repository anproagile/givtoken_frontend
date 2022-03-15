import React from 'react'

const Limitedsale = () => {
    return (
        <section className="homepage" id="homepage">
            <div className="c-grid">
                <div className="homepage__wrapper">
                    <div className="homepage__row homepage__row-1">
                        <img src="img/presale.svg" alt="" />
                    </div>
                    <div className="homepage__row homepage__row-2">
                        <h1 className="homepage__title">Learn More about the Giving Platform: <br />whitepaper - Roadmap - Tokenomics</h1>
                        <div className="homepage__social">
                            <ul className="footer__social">
                                <li>
                                    <a href="https://discord.gg/4zDw4bGdke">
                                        <img src="img/discord.svg" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/TheGivingPool">
                                        <img src="img/telegram.svg" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mobile.twitter.com/givingpool">
                                        <img src="img/twitter.svg" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/thegivingpool.io/">
                                        <img src="img/instagram.png" srcSet="img/instagram@2x.png 2x" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="homepage__desc">The giving platform will be hosting ten (10) initial launches of 125,000,000 Giv tokens. these tokens are to be the circulating supply for giv.</p>
                        <p className="homepage__desc">The private sale for each period will run until the lot of GIV is fully sold or until each Limited Sale is closed.</p>
                    </div>
                    <div className="homepage__row homepage__row-3"><img className="homepage__logo" src="img/img-poolIcon-homepage.png" srcSet="img/img-poolIcon-homepage@2x.png 2x" alt="" />
                        <div className="homepage__block">
                            <div>
                                <p>Next Launch</p><span>March 25, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="homepage__row homepage__row-4">
                        <div className="milestone__table-scroll-wrapper">
                            <div className="milestone__table-scroll"><img className="milestone__table" src="img/img-milestone-1.png" srcSet="img/img-milestone-1@2x.png 2x" alt="" /></div>
                        </div>
                    </div>
                    <div className="homepage__row homepage__row-5">
                        <h2 className="homepage__title">Join our community today for more insights!</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Limitedsale
