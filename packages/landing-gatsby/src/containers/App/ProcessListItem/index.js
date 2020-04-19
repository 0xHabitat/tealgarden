import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import ListItemWrapper, {
  Icon,
  ProcessTitle,
  ProcessDescription,
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
  console.log(
    'data: ',
    Data.appJson.processes[1].summary.abstract.replace(/(.{100})..+/, '$1…')
  );
  return (
    <ListItemWrapper {...SectionWrapper}>
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
        <ProcessTitle {...title}>
          {Data.appJson.processes[0].title}
        </ProcessTitle>
        <ProcessDescription {...description}>
          {Data.appJson.processes[0].summary.abstract.substr(0, 100) + '...'}
        </ProcessDescription>
      </ContentWrapper>
    </ListItemWrapper>
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
    width: '75%',
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
