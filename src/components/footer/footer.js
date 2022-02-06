/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>       
        <Text sx={styles.footer.footercaption}>
            THE GIVING POOL
        </Text>
        <Box sx={styles.footer.menus}>
            <nav>
              {data.footermenuItem.map(({ path, label, iconSrc }, i) => (
                <a sx={styles.footer.link} target="_blank" href={path}><img src={iconSrc} /></a>
              ))}
            </nav>
        </Box>         
        <Text sx={styles.footer.copyright}>
            COPYRIGHT {new Date().getFullYear()} - THEGIVINGPOOL.IO
          </Text>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#000E38',
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      alignItems: 'center',
      mt: [1, 1],
      mb: 1,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      pt: 3,
      pb: 3,
      pl: 3,
      pr: 3,
      color: 'text',
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      // px: [4, null, 2],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {  
      display: 'flex',
      pt: [1, null, 1],
      pb: ['0px', null, '20px'],
      textAlign: 'center',
      flexDirection: 'column',  
      fontWeight: '100',
      fontFamily: 'body',
      fontSize: [1, '14px'],
      color: '#FFFFFF',
      width: '100%',
      letterSpacing: '3px',

    },
    footercaption: {    
      display: 'flex',
      pt: [4, null, 4],
      pb: ['50px', null, '20px'],
      textAlign: 'center',
      flexDirection: 'column',   
      fontWeight: '900',
      fontSize: [1, '40px'],
      fontFamily: 'body',
      color: '#CFD7F2',
      width: '100%',
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
