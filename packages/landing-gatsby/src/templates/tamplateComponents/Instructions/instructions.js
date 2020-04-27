import React from 'react';
import { SectionWrapper, ContentWrapper } from './instructions.style.js';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';

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
