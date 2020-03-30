import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Logo from 'common/src/components/UIElements/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';
import LogoImage from 'common/src/assets/image/app/logo.png';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  copyrightMenu,
  copyright,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appJson {
        menuWidget {
          id
          title
          menuItems {
            id
            text
            url
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
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
              <Text content="©2020 deora - created with &hearts; in Berlin" {...textStyle} />
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
    borderTop: '1px solid',
    borderColor: 'rgba(0,0,0,0.102)',
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
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
  },
  // Default logo size
  logoStyle: {
    width: 'auto',
    mb: ['15px', 0],
  },
  // widget text default style
  textStyle: {
    color: '#20201d',
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
