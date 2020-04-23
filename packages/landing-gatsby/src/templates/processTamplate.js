import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import {
  Tabs,
  Tab,
  Content,
  ContentWrapper,
  FlexWrapper,
  ContentScroll,
  ContentHover,
  ContentHoverTools,
  ToolImg,
  ToolDescription,
  SectionWrapper,
  StepNavigation,
} from './tamplateComponents/processTamplate.style';
import { ExternalLink } from 'react-external-link';
import MDReactComponent from 'markdown-react-js';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Title from './tamplateComponents/Title/title';
import Description from './tamplateComponents/Description/description';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import CookieBanner from 'react-cookie-banner';
import SEO from '../components/seo';
import ProcessList from '../containers/App/ProcessList';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';

const BasicTemplate = (props) => {
  const { pageContext } = props;
  const { pageContent } = pageContext;
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
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
          <Container>
            <SectionWrapper>
              <Heading content="Adoption Requirements" />
              <dvi>
                <Tabs>
                  <Tab onClick={handleClick} active={active === 0} id={0}>
                    <span>🌐</span> Org Structure
                  </Tab>

                  <Tab onClick={handleClick} active={active === 1} id={1}>
                    <span>📜</span> Policies
                  </Tab>
                  <Tab onClick={handleClick} active={active === 2} id={2}>
                    <span>🎭</span> Roles
                  </Tab>
                  <Tab onClick={handleClick} active={active === 3} id={3}>
                    <span>⚒️</span> Tools
                  </Tab>
                  <Tab onClick={handleClick} active={active === 4} id={4}>
                    <span>💖</span> Values
                  </Tab>
                </Tabs>
                <>
                  <Fragment>
                    <ContentWrapper active={active === 0}>
                      <p>
                        Organisational structures, formats and style of
                        governance that is needed to adapt the process."
                      </p>
                      <ExternalLink
                        href={pageContent.addoptionRequirements[0].link}
                      >
                        <ContentHover>
                          <Heading
                            content={pageContent.addoptionRequirements[0].name}
                          />
                          <MDReactComponent
                            text={
                              pageContent.addoptionRequirements[0].description
                            }
                          />
                        </ContentHover>
                      </ExternalLink>
                    </ContentWrapper>
                    <ContentWrapper active={active === 1}>
                      <p>
                        Policies and frameworks used in this process. These can
                        be individualized based on the organisation’s need and
                        background.
                      </p>
                      <ContentScroll>
                        <Heading content={pageContent.components[1].name} />
                        <MDReactComponent
                          text={pageContent.components[1].description}
                        />
                      </ContentScroll>
                    </ContentWrapper>
                    <ContentWrapper active={active === 2}>
                      <p>
                        Mandatory roles that are affected or created for this
                        process to work properly.{' '}
                      </p>
                      <ContentScroll>
                        <Heading content={pageContent.components[0].title} />
                        <Text content={pageContent.components[0].purpose} />
                        <Text content={pageContent.components[0].domains} />
                        <Text
                          content={pageContent.components[0].accountabilities}
                        />
                      </ContentScroll>
                    </ContentWrapper>
                    <ContentWrapper active={active === 3}>
                      <p>Tools that are used in this process.</p>
                      <FlexWrapper>
                        {pageContent.instructions.map((tool, index) => (
                          <ExternalLink href={tool.tool.link}>
                            <ContentHoverTools key={index}>
                              <ToolImg src={tool.tool.link} />
                              <ToolDescription>
                                <Heading content={tool.tool.name} />
                                <Text content={tool.tool.description} />
                              </ToolDescription>
                            </ContentHoverTools>
                          </ExternalLink>
                        ))}
                      </FlexWrapper>
                    </ContentWrapper>
                    <ContentWrapper active={active === 4}>
                      <p>
                        Values drive the organisation and the following are
                        needed to fully adapt this process.
                      </p>
                      <Content>
                        <Heading content="Test" />
                        <Text content="Test" />
                      </Content>
                    </ContentWrapper>
                  </Fragment>
                </>
              </dvi>
            </SectionWrapper>
            <SectionWrapper>
              <Heading content="Integration Steps" />
              <ContentWrapper active={true}>
                {pageContent.instructions.map((tool, index) => (
                  <StepNavigation key={index}>
                    <Heading content={tool.tool.name} />
                  </StepNavigation>
                ))}
              </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper>
              <Heading content="More practices" />
              <ProcessList />
            </SectionWrapper>
          </Container>
          <Newsletter />
          <SupportBlock />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default BasicTemplate;
