import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Box from 'common/src/components/Box';
import ListItemWrapper, {
  Icon,
  IconWrapper,
  ContentWrapper,
} from './processListItem.style';

const ProcessListItem = ({
  title,
  description,
  icon1,
  icon2,
  SectionWrapper,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appJson {
        processes {
          id
          title
          summary {
            abstract
          }
        }
      }
    }
  `);
  return (
    <Box>
      {Data.appJson.processes.map((processes, index) => (
        <ListItemWrapper {...SectionWrapper} key={index}>
          <IconWrapper className="icon__wrapper">
            <Icon src="#" {...icon1}>
              img
            </Icon>
            <p>>>></p>
            <Icon src="#" {...icon2}>
              img
            </Icon>
          </IconWrapper>
          <ContentWrapper className="content__wrapper">
            <Heading {...title} content={Data.appJson.processes[index].title} />
            <Text
              {...description}
              content={
                Data.appJson.processes[index].summary.abstract.substr(0, 100) +
                '...'
              }
            />
          </ContentWrapper>
        </ListItemWrapper>
      ))}
    </Box>
  );
};

ProcessListItem.propTypes = {
  icon1: PropTypes.object,
  icon2: PropTypes.object,
  description: PropTypes.object,
  title: PropTypes.object,
  SectionWrapper: PropTypes.object,
};

ProcessListItem.defaultProps = {
  icon1: {
    width: '74px',
    height: '74px',
    pr: '15px',
  },
  icon2: {
    width: '74px',
    height: '74px',
    pl: '15px',
  },
  description: {
    mt: '0px',
    width: '70%',
    textOverflow: 'ellipsis',
  },
  title: {
    mb: '0px',
  },
  SectionWrapper: {
    borderbottom: '1px solid',
    borderColor: 'rgba(0,0,0,0.102)',
  },
};

export default ProcessListItem;
