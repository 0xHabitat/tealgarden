import React, { useState, Fragment } from 'react';
import {
  SectionWrapper,
  Content,
  ContentWrapper,
  ContentScroll,
  ContentHover,
} from './instructions.style.js';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { ExternalLink } from 'react-external-link';
import MDReactComponent from 'markdown-react-js';
import { propTypes } from 'react-cookie-banner/lib/BannerContent';
import Description from '../Description/description.js';

const Instructions = ({}) => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading content="Integration Steps" />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

Instructions.propTypes = {};

Instructions.defaultProps = {};

export default Instructions;
