import React, { Fragment } from 'react';
import '@redq/reuse-modal/es/index.css';
import PropTypes from 'prop-types';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import List from 'common/src/components/List';
import Heading from 'common/src/components/Heading';
import MDReactComponent from 'markdown-react-js';
import {
  SectionWrapper,
  SummaryWrapper,
  BenefitsWrapper,
  YellowHighliter,
} from './description.style';

const Description = ({ summaryText, textStyle, benefitsText }) => {
  return (
    <Container>
      <SectionWrapper>
        {summaryText || benefitsText ? (
          <Fragment>
            <SummaryWrapper>
              <YellowHighliter>
                <Heading content="Summary" />
              </YellowHighliter>
              <MDReactComponent text={summaryText} {...textStyle} />
            </SummaryWrapper>
            <BenefitsWrapper>
              <YellowHighliter>
                <Heading content="Benefits" />
              </YellowHighliter>
              <List text={benefitsText} {...textStyle} />
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
  textStyle: PropTypes.string,
};

Description.defaultProps = {
  textStyle: {
    fontSize: '14px',
  },
};

export default Description;
