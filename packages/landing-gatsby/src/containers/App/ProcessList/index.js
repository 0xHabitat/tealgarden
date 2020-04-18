import React from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import SectionWrapper from './processList.style';
import { SCREENSHOTS } from 'common/src/data/SaasClassic';

const ProcessList = ({ secTitleWrapper, secText, secHeading }) => {
  return (
    <SectionWrapper id="screenshot_section">
      <Container>
        <h1>content</h1>
      </Container>
    </SectionWrapper>
  );
};

ProcessList.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

ProcessList.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#E26C65',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#091632',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '1440px',
    maxWidth: '100%',
  },
};

export default ProcessList;
