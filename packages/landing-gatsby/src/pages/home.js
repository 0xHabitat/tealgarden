import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import Content from '../containers/App/ContentSection';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default () => {
  const size = process.browser && useWindowSize();
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="The best processes for self-managed and distributed teams" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Navbar />
          <Content />
          <Newsletter />
          <SupportBlock />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
