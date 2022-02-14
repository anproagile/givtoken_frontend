/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';

import DiscordIcon  from 'img/discord.svg';
import TelegramIcon from 'img/telegram.svg';
import TwitterIcon from 'img/twitter.svg';
import InstagramIcon from 'img/instagram.png';


export default function Footer() {
  return (
      <footer class="footer" id="footer">
        <div class="c-grid">
          <div class="footer__wrapper">
            <h2 class="footer__title">The giving Pool</h2>
            <ul class="footer__social">
              <li><a target="_blank" href="https://discord.gg/dYuWzKd5"><img src={DiscordIcon} alt=""></img></a></li>
              <li><a target="_blank" href="https://t.me/TheGivingPool"><img src={TelegramIcon} alt=""></img></a></li>
              <li><a target="_blank" href="https://mobile.twitter.com/givingpool"><img src={TwitterIcon} alt=""></img></a></li>
              <li><a target="_blank" href="https://www.instagram.com/thegivingpool.io/"><img src={InstagramIcon} alt=""></img></a></li>
            </ul>
            <p class="footer__copyright">copyright 2022 - thegivingpool.io</p>
          </div>
        </div>
      </footer>
  );
}

const styles = {
  
};
