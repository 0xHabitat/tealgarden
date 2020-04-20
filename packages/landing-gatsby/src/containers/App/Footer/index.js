import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Logo from 'common/src/components/UIElements/Logo';
import Container from 'common/src/components/UI/Container';
import { FooterWrapper, Divider } from './footer.style';
import LogoImage from 'common/src/assets/image/app/deoraLogo.png';

const Footer = ({
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  copyrightMenu,
  copyright,
}) => {
  return (
    <FooterWrapper>
      <Divider>
        <svg
          width="2500"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 28.5H93.5L141.5 2H1439.5"
            stroke="#091632"
            strokeWidth="2"
          />
          <line
            x1="141"
            y1="2"
            x2="2500"
            y2="2"
            stroke="#091632"
            strokeWidth="2"
          />
        </svg>
      </Divider>
      <Container>
        <Box {...colTwo} className="copyrightClass">
          <Logo
            href="/app"
            logoSrc={LogoImage}
            title="App"
            logoStyle={logoStyle}
          />
          <Box {...copyrightMenu} className="copyrightMenu">
            <Text content="Deora" {...textStyle} />
            <Text content="Privacy" {...textStyle} />
            <Text content="Terms" {...textStyle} />
          </Box>
          <Box {...copyright} className="copyrightText">
            <Text
              content="developed with &hearts; in Berlin supported by a community arround the world."
              {...textStyle}
            />
          </Box>
        </Box>
        {/* End of footer List column */}
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colTwo: {
    mt: [0, '13px'],
    mb: ['0px', 0],
    pl: ['15px', 0],
    pt: ['35px', '55px'],
    pr: ['15px', '15px', 0],
    flexBox: true,
    flexWrap: 'wrap',
    width: ['100%'],
  },
  // Footer col two style
  colOne: {
    width: ['100%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%', '25%'],
    pl: ['15px', '0px'],
    pr: ['15px', '0px'],
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#091632',
    fontSize: '16px',
    fontWeight: '700',
  },
  // Default logo size
  logoStyle: {
    width: '150px',
    mb: ['15px', 0],
  },
  // widget text default style
  textStyle: {
    color: '#091632',
    fontSize: '14px',
    mb: '10px',
    mr: '30px',
  },
  copyrightMenu: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: [0, '40px'],
    mt: '3px',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    mb: ['15px', 0],
  },
  copyright: {
    ml: [0, 0, 0, 'auto', 'auto'],
    color: '#20201d',
    fontSize: '14px',
    mb: '10px',
    mt: '3px',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Footer;
