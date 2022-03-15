import React from 'react'

const Tokenomics = () => {
    return (
        <section className="tokenomics" id="tokenomics">
            <div className="c-grid">
                <h2 className="tokenomics__title">Tokenomics</h2>
                <div className="tokenomics__wrapper">
                    <h3 className="tokenomics__title">Giv Token</h3>
                    <p className="tokenomics__desc">$GIV is the cryptographic utility token that powers the GIV Finance ecosystem, and is based on the ERC-20 standard. Its primary use is to enable consumer access to our platform, as well as generate rewards to be distributed to their destinations</p>
                    <p className="tokenomics__desc">GIV is used for the following:</p>
                    <p className="tokenomics__desc">1. Funds the Giving Pool</p>
                    <p className="tokenomics__desc">2. Rewards holders</p>
                    <p className="tokenomics__desc">3. Allow voting rights in the Giving Pool</p>
                    <p className="tokenomics__desc">Written in Giv’s smart contract - each transaction will help us achieve a self sustaining flow of operability.</p>
                    <h3 className="tokenomics__title">Transactional Fees</h3>
                    <p className="tokenomics__desc">10% of capital used to purchase GIV will be converted into ETH and USDT upon each transaction to be dispersed throughout the ecosystem.</p>
                    <p className="tokenomics__desc">This Transaction fee is used solely to fund the Giving pool and the generate rewards for token holders.</p>
                    <p className="tokenomics__desc">90% is put into our liquidity Pool, creating the value of GIV.</p><img src="img/img-tokenomics-1.png" srcSet="img/img-tokenomics-1@2x.png 2x" alt="" />
                    <h3 className="tokenomics__title">Token Distribution</h3>
                    <p className="tokenomics__desc">The Giving Foundation will create 250,000,000 GIV tokens (250 million.)</p>
                    <ul className="tokenomics__list">
                        <li>125,000,000 Giv tokens put into giv’s liquidity pool that represents our circulating supply</li>
                        <li>50,000,000 (50M) Giv Tokens Locked in a seperate wallet designed to collect token rewards to fund community giveaways</li>
                        <li>50,000,000 (50M) Giv Tokens in the wallets of Developers to keep the operation of the giving platform running, Preform dApp updates & add new features.</li>
                        <li>25,000,000 (25M) Giv tokens in a reserve wallet for future announcements</li>
                    </ul><img src="img/img-tokenomics-2.png" srcSet="img/img-tokenomics-2@2x.png 2x" alt="" />
                    <h3 className="tokenomics__title">Token Sale</h3>
                    <p className="tokenomics__desc">GIV shall only be made available for purchase through its token sale or on the secondary exchange market. No other tokens will be minted or available for purchase from GIV. There will be a total supply of 250,000,000 GIV Tokens with 125,000,000 GIV Tokens in circulation</p>
                    <p className="tokenomics__desc">Our goal is to drive token value appreciation for early token buyers by significantly discounting tokes sold in each pre-sale round. The price will incrementally increase with each sale round, and each round is concluded when the allotment of tokens allocated for that round has been exhausted.</p>
                    <p className="tokenomics__desc">Our circulating supply of 125 million tokens will be strategically added into the liquidity pool by facilitating 10 Limited sales of giv via our site.</p>
                    <img src="img/img-tokenomics-3.png" srcSet="img/img-tokenomics-3@2x.png 2x" alt="" />
                    <p className="tokenomics__desc">By periodically raising funds from these limited releases we will be able to control the value of giv while setting up a road for growth.</p>
                    <p className="tokenomics__desc">During the LIMITED SALES fees will follow the protocol from the original smart contract and in ADDITION have a: 5% DEV fee that will go into A SEPERATE WALLET in the form of ETH</p>
                    <p className="tokenomics__desc">after our 10 limited sales, the only way to purchase giv will be in uniswap using our token address.</p>
                    <h4>See our roadmap page to learn</h4>
                    <h4>about the 10 initial sales and</h4>
                    <h4>future plans from giv</h4>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics
