import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import ProcessList from '../ProcessList';
import Container from 'common/src/components/UI/Container';
import { Sun } from './content.style';

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
      <Sun />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <FeatureBlock title={<Heading {...title} />} />
            <ProcessList />
          </Box>
          <Box {...col} {...Sidebar}>
            <Box {...sidebarComponent}>
              <h5>Search in Categories</h5>
            </Box>
            <Box {...sidebarComponent}>
              <h5>Process of the Week</h5>
            </Box>
            <Box {...sidebarComponent}>
              <h5>Story of the Week</h5>
            </Box>
          </Box>
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
    pt: '70px',
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
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-90px',
  },
  Sidebar: {
    width: ['0%', '0%', '43%', '35%', '52%'],
    ml: 'auto',
  },
  title: {
    content:
      'Discover Processes and tools for self-managed and distributed teams',
    fontSize: ['18px', '18px', '18px', '24px', '26px'],
    fontWeight: '700',
    color: '#091632',
    letterSpacing: '1.2px',
    lineHeight: '32px',
    mb: '10px',
    mt: '10px',
  },
  sidebarComponent: {
    ml: 'auto',
    mt: '70px',
  },
};

export default Content;
