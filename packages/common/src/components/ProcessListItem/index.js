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
  {
    /* const Data = useStaticQuery(graphql`
    query {
      appJson {
        processes {
          id
          title
          categories
        }
      }
    }
  `); */
  }

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
        <ProcessTitle {...title}>This is the Process Title</ProcessTitle>
        <ProcessDescription {...description}>
          This is the longer process descirption which descripes the Process in
          a short way.
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
