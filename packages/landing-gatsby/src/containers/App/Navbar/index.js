import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/src/components/Navbar';
import Button from 'common/src/components/Button';
import LoginModal from '../LoginModal';
import Logo from 'common/src/components/UIElements/Logo';
import { openModal, closeModal } from '@redq/reuse-modal';
import { Container, Divider } from './navbar.style';
import LogoImage from 'common/src/assets/image/app/logo.png';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const Navbar = ({ navbarStyle, logoStyle }) => {
  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Divider>
        <Container>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Teal.Garden by Deora"
            logoStyle={logoStyle}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#!" style={{ color: '#091632', fontWeight: '600' }}>
              {' '}
              Home
            </a>
            <a href="#!" style={{ color: '#091632', fontWeight: '600' }}>
              {' '}
              About
            </a>
            <a href="#!" style={{ color: '#091632', fontWeight: '600' }}>
              {' '}
              Blog
            </a>
            <Button
              className="icon"
              onClick={handleLoginModal}
              icon={<i className="flaticon-user" />}
              aria-label="login"
            />
          </div>
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
            stroke-width="2"
          />
          <line
            x1="141"
            y1="2"
            x2="2500"
            y2="2"
            stroke="#091632"
            stroke-width="2"
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
    fontWeight: '600',
    pl: '5px',
  },
};

export default Navbar;
