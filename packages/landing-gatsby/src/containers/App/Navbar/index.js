import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/src/components/Navbar';
import Logo from 'common/src/components/UIElements/Logo';
import { Container, Divider } from './navbar.style';
import LogoImage from 'common/src/assets/image/app/logo.png';

const Navbar = ({ navbarStyle, logoStyle }) => {
  return (
    <NavbarWrapper {...navbarStyle}>
      <Divider>
        <Container>
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Teal.Garden by Deora"
            logoStyle={logoStyle}
          />
          {/*
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="/"
              style={{
                color: '#091632',
                fontWeight: '700',
                paddingRight: '20px',
                fontStyle: 'italic',
              }}
            >
              {' '}
              HOME
            </a>
            <a
              href="/about"
              style={{
                color: '#091632',
                fontWeight: '700',
                fontStyle: 'italic',
              }}
            >
              {' '}
              ABOUT
            </a>
            {/*
            <Button
              className="icon"
              onClick={handleLoginModal}
              icon={<i className="flaticon-user" />}
              aria-label="login"
            />
          </div> */}
        </Container>
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
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
  navElement: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '80px',
  },
  logoStyle: {
    pt: '3px',
    width: ['200px', '180px'],
  },
  navElement: {
    color: '#091632',
    fontWeight: '700',
    pl: '5px',
    fontStyle: 'italic',
  },
};

export default Navbar;
