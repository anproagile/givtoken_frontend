import React from 'react'

const Limitedsale = () => {
    return (
        <section className="landing" id="landing">
            <div className="c-grid">
                <div className="landing__container">
                    <div className="landing__wrapper landing__wrapper-1">
                        <div className="landing__row">
                            <div className="landing__col landing__col-1">
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
                            <div className="landing__col landing__col-2">
                                <div className="logo logo--landing">
                                    <a className="logo__btn" href="/">
                                        <img src="img/logo-landing.png" srcSet="img/logo-landing@2x.png 2x" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="landing__col landing__col-3" />
                        </div>
                        <div className="landing__timer-wrapper">
                            <p className="landing__timer-title">NEXT LAUNCH:</p>
                            <div className="landing__timer">
                                <div className="container-countdown">
                                    <section className="countdown-block"><span className="days time-element">
                                        <u /><span className="top">00</span><span className="top-back"><span>00</span></span><span className="bottom">00</span><span className="bottom-back"><span>00</span></span></span>
                                        <h2 className="subtitle">Days</h2>
                                    </section>
                                    <section className="countdown-block"><span className="hours time-element">
                                        <u /><span className="top">00</span><span className="top-back"><span>00</span></span><span className="bottom">00</span><span className="bottom-back"><span>00</span></span></span>
                                        <h2 className="subtitle">Hours</h2>
                                    </section>
                                    <section className="countdown-block"><span className="minutes time-element">
                                        <u /><span className="top">00</span><span className="top-back"><span>00</span></span><span className="bottom">00</span><span className="bottom-back"><span>00</span></span></span>
                                        <h2 className="subtitle">Minutes</h2>
                                    </section>
                                    <section className="countdown-block"><span className="seconds time-element">
                                        <u /><span className="top">00</span><span className="top-back"><span>00</span></span><span className="bottom">00</span><span className="bottom-back"><span>00</span></span></span>
                                        <h2 className="subtitle">Seconds</h2>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__wrapper landing__wrapper-2">
                        <p className="landing__heading">LEARN MORE BY READING OUR: WHITEPAPER - ROADMAP - TOKENOMICS</p>
                        <p className="landing__desc">The giving platform will be hosting ten (10) initial launches of 125,000,000 Giv tokens. <br />these tokens are to be the circulating supply for giv.</p>
                        <p className="landing__desc">The private sale for each period will run until the lot of GIV is fully sold or until each Limited Sale is closed.</p>
                    </div>
                    <div className="landing__wrapper landing__wrapper-3">
                        <div className="milestone__table-scroll-wrapper">
                            <div className="milestone__table-scroll"><img className="milestone__table" src="img/img-milestone-1.png" srcSet="img/img-milestone-1@2x.png 2x" alt="" /></div>
                        </div>
                    </div>
                    <div className="landing__wrapper landing__wrapper-4">
                        <p className="landing__subtitle">Join our community today for more insights!</p>
                    </div>
                </div>
            </div>
        </section>
        // <section classNameName="homepage" id="homepage">
        //     <div classNameName="c-grid">
        //         <div classNameName="homepage__wrapper">
        //             <div classNameName="homepage__row homepage__row-1">
        //                 <img classNameName="homepage__row-1__media" src="img/presale@2x.png" alt="" />                        
        //             </div>
        //             <div classNameName="homepage__row homepage__row-2">
        //                 <h1 classNameName="homepage__title">Learn More about the Giving Platform: <br />whitepaper - Roadmap - Tokenomics</h1>
        //                 <div classNameName="homepage__social">
        //                     <ul classNameName="footer__social">
        //                         <li>
        //                             <a href="https://discord.gg/4zDw4bGdke">
        //                                 <img src="img/discord.svg" alt="" />
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a href="https://t.me/TheGivingPool">
        //                                 <img src="img/telegram.svg" alt="" />
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a href="https://mobile.twitter.com/givingpool">
        //                                 <img src="img/twitter.svg" alt="" />
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a href="https://www.instagram.com/thegivingpool.io/">
        //                                 <img src="img/instagram.png" srcSet="img/instagram@2x.png 2x" alt="" />
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <p classNameName="homepage__desc">The giving platform will be hosting ten (10) initial launches of 125,000,000 Giv tokens. these tokens are to be the circulating supply for giv.</p>
        //                 <p classNameName="homepage__desc">The private sale for each period will run until the lot of GIV is fully sold or until each Limited Sale is closed.</p>
        //             </div>
        //             <div classNameName="homepage__row homepage__row-3"><img classNameName="homepage__logo" src="img/img-poolIcon-homepage.png" srcSet="img/img-poolIcon-homepage@2x.png 2x" alt="" />
        //                 <div classNameName="homepage__block">
        //                     <div>
        //                         <p>Next Launch</p><span>March 25, 2022</span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div classNameName="homepage__row homepage__row-4">
        //                 <div classNameName="milestone__table-scroll-wrapper">
        //                     <div classNameName="milestone__table-scroll"><img classNameName="milestone__table" src="img/img-milestone-1.png" srcSet="img/img-milestone-1@2x.png 2x" alt="" /></div>
        //                 </div>
        //             </div>
        //             <div classNameName="homepage__row homepage__row-5">
        //                 <h2 classNameName="homepage__title">Join our community today for more insights!</h2>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Limitedsale
