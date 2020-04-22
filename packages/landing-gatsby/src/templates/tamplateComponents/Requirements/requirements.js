import React, { useState, Fragment } from 'react';
import { Tabs, Tab, ContentWrapper, Content } from './requirements.style.js';
import Container from 'common/src/components/UI/Container';
import { SectionWrapper } from './requirements.style';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { ExternalLink } from 'react-external-link';

const Requirements = ({
  orgHeadline,
  orgAbstract,
  orgLink,
  policies,
  roles,
  tools,
  values,
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
            {orgHeadline ||
            orgAbstract ||
            orgLink ||
            policies ||
            roles ||
            tools ||
            values ? (
              <Fragment>
                <ContentWrapper active={active === 0}>
                  <p>
                    Organisational structures, formats and style of governance
                    that is needed to adapt the process."
                  </p>
                  <ExternalLink href={orgLink}>
                    <Content>
                      <Heading content={orgHeadline} />
                      <Text content={orgAbstract} />
                    </Content>
                  </ExternalLink>
                </ContentWrapper>
                <ContentWrapper active={active === 1}>
                  {policies}
                </ContentWrapper>
                <ContentWrapper active={active === 2}>{roles}</ContentWrapper>
                <ContentWrapper active={active === 3}>{tools}</ContentWrapper>
                <ContentWrapper active={active === 4}>{values}</ContentWrapper>
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

export default Requirements;
