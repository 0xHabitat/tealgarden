import React, { Fragment } from 'react';
import { graphql } from "gatsby"
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import {
  SectionWrapper,
  SectionWrapperSmall,
} from './tamplateComponents/processTamplate.style';
import { MobileBlocker } from './tamplateComponents/MobileBlocker/mobileBlocker.style';
import { isMobile } from 'react-device-detect';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Title from './tamplateComponents/Title/title';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import CookieBanner from 'react-cookie-banner';
import SEO from '../components/seo';
import Container from 'common/src/components/UI/Container';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
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
              title={frontmatter.title}
              description={frontmatter.description.substr(0, 180) + '...'}
            />
            <Container>
              <SectionWrapperSmall>
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
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

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MM DD, YYYY")
        slug
        title
        autor
        description
      }
    }
  }
`