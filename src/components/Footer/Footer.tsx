import React from 'react'

import config from './config'

const Footer = () => {
  const { socialLinks } = config

  return (
    <footer className="footer" id="footer">
      <div className="c-grid">
        <div className="footer__wrapper">
          <h2 className="footer__title">The giving Pool</h2>
          <ul className="footer__social">
            <li>
              <a href="https://discord.gg/dYuWzKd5" rel="noreferrer" target="_blank">
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
          <p className="footer__copyright">copyright 2022 - thegivingpool.io</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
