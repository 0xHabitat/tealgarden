import React, { useState, Fragment } from 'react';
import {
  Tabs,
  Tab,
  Content,
  ContentWrapper,
  ContentScroll,
  ContentHover,
} from './requirements.style.js';
import Container from 'common/src/components/UI/Container';
import { SectionWrapper } from './requirements.style';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { ExternalLink } from 'react-external-link';
import MDReactComponent from 'markdown-react-js';
import { propTypes } from 'react-cookie-banner/lib/BannerContent';
import Description from '../Description/description.js';

const Requirements = ({
  orgHeading,
  orgAbstract,
  orgLink,
  policiesHeading,
  policiesText,
  roleHeading,
  rolePurpose,
  roleDomains,
  roleAccountabilities,
  roleAccountabilitiesStyle,
  toolHeading,
  toolDescription,
  toolElementStyle,
  valueHeading,
  valueDescription,
}) => {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <SectionWrapper>
      <Container>
        <Heading content="Addoption Requirements" />
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
            {orgHeading ||
            orgAbstract ||
            orgLink ||
            policiesHeading ||
            policiesText ||
            roleHeading ||
            rolePurpose ||
            roleDomains ||
            roleAccountabilities ||
            toolHeading ||
            toolDescription ||
            valueHeading ||
            valueDescription ? (
              <Fragment>
                <ContentWrapper active={active === 0}>
                  <p>
                    Organisational structures, formats and style of governance
                    that is needed to adapt the process."
                  </p>
                  <ExternalLink href={orgLink}>
                    <ContentHover>
                      <Heading content={orgHeading} />
                      <MDReactComponent text={orgAbstract} />
                    </ContentHover>
                  </ExternalLink>
                </ContentWrapper>
                <ContentWrapper active={active === 1}>
                  <p>
                    Policies and frameworks used in this process. These can be
                    individualized based on the organisation’s need and
                    background.
                  </p>
                  <ContentScroll>
                    <Heading content={policiesHeading} />
                    <MDReactComponent text={policiesText} />
                  </ContentScroll>
                </ContentWrapper>
                <ContentWrapper active={active === 2}>
                  <p>
                    Mandatory roles that are affected or created for this
                    process to work properly.{' '}
                  </p>
                  <ContentScroll {...roleAccountabilitiesStyle}>
                    <Heading content={roleHeading} />
                    <Text content={rolePurpose} />
                    <Text content={roleDomains} />
                    <Text content={roleAccountabilities} />
                  </ContentScroll>
                </ContentWrapper>
                <ContentWrapper active={active === 3}>
                  <p>Tools that are used in this process.</p>
                  <ContentHover {...toolElementStyle}>
                    <Heading content={toolHeading} />
                    <Text content={toolDescription} />
                  </ContentHover>
                </ContentWrapper>
                <ContentWrapper active={active === 4}>
                  <p>
                    Values drive the organisation and the following are needed
                    to fully adapt this process.
                  </p>
                  <Content>
                    <Heading content={valueHeading} />
                    <Text content={valueDescription} />
                  </Content>
                </ContentWrapper>
              </Fragment>
            ) : (
              'nothing here...'
            )}
          </>
        </dvi>
      </Container>
    </SectionWrapper>
  );
};

Requirements.propTypes = {
  roleAccountabilitiesStyle: propTypes.object,
  toolElementStyle: propTypes.object,
};

Requirements.defaultProps = {
  roleAccountabilitiesStyle: {
    width: ['100%', '100%', '80%', '50%', '30%'],
  },
  toolElementStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '150px',
  },
};

export default Requirements;
