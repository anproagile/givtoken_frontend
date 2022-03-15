import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PenguinTheme } from 'penguinfinance-uikit2/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PenguinTheme { }
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  #root {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    overflow-x: hidden;
  }
  html {
    // background: url(/images/cryptopuffies/background.png) no-repeat center center fixed; 
    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    // background-size: cover;
  }
  body {
    background: white;
    img {
      height: auto;
      max-width: 100%;
    }
    overflow: hidden;
  }
  // custom fonts
  @font-face {
    font-family: 'Gotham';
    src: url(${process.env.PUBLIC_URL}/fonts/Gotham-Light.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham-bold';
    src: url(${process.env.PUBLIC_URL}/fonts/Gotham-Bold.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham-black';
    src: url(${process.env.PUBLIC_URL}/fonts/Gotham-Black.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'GothamUltra';
    src: url(${process.env.PUBLIC_URL}/fonts/Gotham-Ultra.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Telegraf UltraLight';
    src: url(${process.env.PUBLIC_URL}/fonts/Telegraf-UltraLight.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Telegraf Regular';
    src: url(${process.env.PUBLIC_URL}/fonts/Telegraf-Regular.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Telegraf Bold';
    src: url(${process.env.PUBLIC_URL}/fonts/Telegraf-Bold.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Telegraf UltraBold Font';
    src: url(${process.env.PUBLIC_URL}/fonts/Telegraf-UltraBold.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Aldrich';
    src: url(${process.env.PUBLIC_URL}/fonts/Aldrich-Regular.ttf) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'PoppinsBold';
    src: url(${process.env.PUBLIC_URL}/fonts/Poppins-Bold.ttf) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'PoppinsRegular';
    src: url(${process.env.PUBLIC_URL}/fonts/Poppins-Regular.ttf) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'CheddarGothicSans';
    src: url(${process.env.PUBLIC_URL}/fonts/cheddargothic-sans-webfont.woff) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'CheddarGothicSansItalic';
    src: url(${process.env.PUBLIC_URL}/fonts/cheddargothic-sansitalic-webfont.woff) format('truetype');
    font-display: swap;
  }
`

export default GlobalStyle
