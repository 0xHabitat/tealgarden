import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import DomainSection from '../containers/App/Banner';
import FeatureSection from '../containers/App/FeatureSection';
import ControllSection from '../containers/App/Control';
import PartnerHistory from '../containers/App/PartnerHistory';
import PaymentSection from '../containers/App/PaymentSection';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import UpdateScreen from '../containers/App/UpdateScreen';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Newsletter from '../containers/App/Newsletter';
import TrialSection from '../containers/App/Trial';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

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
  const innerWidth = process.browser && size.innerWidth;

  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="The best processes for self-managed and distributed teams" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
          <DomainSection />
          <FeatureSection />
          <ControllSection />
          <UpdateScreen />
          <PartnerHistory />
          <PaymentSection />
          <TrialSection />
          <Newsletter />
          <SupportBlock />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
