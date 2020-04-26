import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper } from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import Content from '../containers/App/ContentSection';
import CookieBanner from 'react-cookie-banner';

export default () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="The best processes for self-managed and distributed teams" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <CookieBanner
            styles={{
              banner: { backgroundColor: 'rgba(9, 22, 50, 0.1)' },
              message: {
                fontWeight: '600',
                fontFaimly: 'poppins, sans-serife',
                color: '#091632',
                fontStyle: 'italic',
              },
            }}
            message="Yes, we use cookies to enhance the user experiance!"
            cookie="gatsby-gdpr-google-analytics"
          />
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