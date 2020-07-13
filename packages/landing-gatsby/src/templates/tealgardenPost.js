import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import {
  SectionWrapper,
  SectionWrapperSmall,
  YellowHighliter,
} from './tamplateComponents/tealgardenPost.style';
import { MobileBlocker } from './tamplateComponents/MobileBlocker/mobileBlocker.style';
import { isMobile } from 'react-device-detect';
import MDReactComponent from 'markdown-react-js';
import { ExternalLink } from 'react-external-link';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Title from './tamplateComponents/Title/title';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import CookieBanner from 'react-cookie-banner';
import Box from 'common/src/components/Box';
import SEO from '../components/seo';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import List from 'common/src/components/List';

const BasicTemplate = (props) => {
  const { pageContext } = props;
  const { pageContent } = pageContext;
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.currentTarget.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const structures = pageContent.components.filter(byType('structure'));
  structures.push(...pageContent.content.filter(byType('structure')));
  const tools = pageContent.components.filter(byType('tool'));
  tools.push(...pageContent.content.filter(byType('tool')));
  if (isMobile) {
    return (
      <ThemeProvider theme={appTheme}>
        <AppWrapper>
          <MobileBlocker>
            This Website is currently only available on Desktop devices. Pleas
            come back to enjoy the full experiance.
          </MobileBlocker>
        </AppWrapper>
      </ThemeProvider>
    );
  } else
    return (
      <ThemeProvider theme={appTheme}>
        <Fragment>
          <SEO title="The best processes for self-managed and distributed teams" />
          <Modal />
          <ResetCSS />
          <GlobalStyle />
          <AppWrapper>
            <Sun />
            <CookieBanner
              styles={{
                banner: { backgroundColor: 'rgba(9, 22, 50, 0.1)' },
                message: {
                  fontWeight: 500,
                  fontFamily: 'poppins, sans-serif',
                  color: '#091632',
                },
              }}
              message="Yes, we use cookies. To enhance the user experience."
              cookie="gatsby-gdpr-google-analytics"
            />
            <Navbar />
            <Title
              icon1={pageContent.icons.startIconUrl}
              icon2={pageContent.icons.endIconUrl}
              title={pageContent.title}
              description={pageContent.summary.abstract.substr(0, 180) + '...'}
            />
            <Container>
              <SectionWrapperSmall>
                <YellowHighliter>
                  <Heading content="Summary" />
                </YellowHighliter>
                <MDReactComponent text={pageContent.summary.abstract} />
              </SectionWrapperSmall>
            </Container>
            <SectionWrapper>
              <Newsletter />
            </SectionWrapper>
            <SupportBlock />
            <Footer />
          </AppWrapper>
        </Fragment>
      </ThemeProvider>
    );
};

export default BasicTemplate;
