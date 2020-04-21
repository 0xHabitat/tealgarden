import React, { Fragment } from 'react';
import '@redq/reuse-modal/es/index.css';
import PropTypes from 'prop-types';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import {
  SectionWrapper,
  SummaryWrapper,
  BenefitsWrapper,
} from './description.style';

const Description = ({ summaryText, textStyle, benefitsText }) => {
  return (
    <Container>
      <SectionWrapper>
        {summaryText || benefitsText ? (
          <Fragment>
            <SummaryWrapper>
              <Heading content="Summary" />
              <Text content={summaryText} {...textStyle} />
            </SummaryWrapper>
            <BenefitsWrapper>
              <Heading content="Benefits" />
              <Text {...textStyle} content={benefitsText} />
            </BenefitsWrapper>
          </Fragment>
        ) : (
          ''
        )}
      </SectionWrapper>
    </Container>
  );
};

Description.propTypes = {
  textStyle: PropTypes.object,
};

Description.defaultProps = {
  textStyle: {
    fontSize: '14px',
  },
};

export default Description;
