import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Title from './tamplateComponents/Title/title';
import Description from './tamplateComponents/Description/description';
import Requirements from './tamplateComponents/Requirements/requirements';
import Instructions from './tamplateComponents/Instructions/instructions';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import CookieBanner from 'react-cookie-banner';
import SEO from '../components/seo';
import ProcessList from '../containers/App/ProcessList';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

const basicTemplate = (props) => {
  const { pageContext } = props;
  const { pageContent } = pageContext;

  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="The best processes for self-managed and distributed teams" />
        <CookieBanner
          styles={{
            banner: { backgroundColor: '#FFDE00' },
            message: {
              fontWeight: 500,
              fontFamily: 'poppins, sans-serif',
              color: '#091632',
            },
          }}
          message="Yes, we use cookies. To enhance the user experience."
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
        />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sun />
          <Navbar />
          <Title
            icon1={pageContent.icons.startIconUrl}
            icon2={pageContent.icons.endIconUrl}
            title={pageContent.title}
            description={pageContent.summary.abstract.substr(0, 180) + '...'}
          />
          <Description
            summaryText={pageContent.summary.abstract}
            benefitsText={pageContent.summary.benefits}
          />
          <Requirements
            orgHeading={pageContent.addoptionRequirements[0].name}
            orgAbstract={pageContent.addoptionRequirements[0].description}
            orgLink={pageContent.addoptionRequirements[0].link}
            policiesHeading={pageContent.components[1].name}
            policiesText={pageContent.components[1].description}
            roleHeading={pageContent.components[0].title}
            rolePurpose={pageContent.components[0].purpose}
            roleDomain={pageContent.components[0].domains}
            roleAccountabilities={pageContent.components[0].accountabilities}
          />
          <Newsletter />
          <Instructions />
          <Container>
            <Heading content="More practices" />
            <ProcessList />
          </Container>
          <SupportBlock />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default basicTemplate;
