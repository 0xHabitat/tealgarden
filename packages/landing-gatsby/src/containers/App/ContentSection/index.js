import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import ProcessList from '../ProcessList';
import Container from 'common/src/components/UI/Container';

const Content = ({
  SectionWrapper,
  Sidebar,
  sidebarComponent,
  row,
  col,
  title,
}) => {
  return (
    <Box {...SectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...col}>
            <FeatureBlock title={<Heading {...title} />} />
            <ProcessList />
          </Box>
          {/* <Box {...col} {...Sidebar}>
            <Box {...sidebarComponent}>
              <h5>Search in Categories</h5>
            </Box>
            <Box {...sidebarComponent}>
              <h5>Process of the Week</h5>
            </Box>
            <Box {...sidebarComponent}>
              <h5>Story of the Week</h5>
            </Box>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

Content.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
};

Content.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  SidebarRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '100%', '100%'],
  },
  Sidebar: {
    width: ['0%', '0%', '0%', '0%', '0%'],
    ml: 'auto',
  },
  title: {
    content:
      'Discover Processes and tools for self-managed and distributed teams',
    fontSize: ['18px', '18px', '18px', '24px', '26px'],
    fontWeight: '700',
    width: ['100%', '100%', '100%', '80%', '45%'],
    color: '#091632',
    letterSpacing: '1.2px',
    lineHeight: '32px',
  },
  sidebarComponent: {
    ml: 'auto',
    mt: '70px',
  },
};

export default Content;
