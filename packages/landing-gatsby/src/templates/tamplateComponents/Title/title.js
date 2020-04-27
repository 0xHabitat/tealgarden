import React, { Fragment } from 'react';
import '@redq/reuse-modal/es/index.css';
import PropTypes from 'prop-types';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import ListItemWrapper, {
  Icon,
  IconWrapper,
  ContentWrapper,
} from './title.style';

const Title = ({
  title,
  description,
  icon1style,
  icon2style,
  icon1,
  icon2,
  descriptionStyle,
  titleStyle,
  ListElementWrapper,
  arrow,
}) => {
  return (
    <Container>
      <ListItemWrapper {...ListElementWrapper}>
        {icon1 || icon2 || title || description ? (
          <Fragment>
            <IconWrapper className="icon__wrapper">
              <Icon src={icon1} {...icon1style} />
              <Text content=">>>" {...arrow} />
              <Icon src={icon2} {...icon2style} />
            </IconWrapper>
            <ContentWrapper className="content__wrapper">
              <Heading {...titleStyle} content={title} />
              <Text {...descriptionStyle} content={description} />
            </ContentWrapper>
          </Fragment>
        ) : (
          ''
        )}
      </ListItemWrapper>
    </Container>
  );
};

Title.propTypes = {
  icon1style: PropTypes.object,
  icon2style: PropTypes.object,
  descriptionStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  ListElementWrapper: PropTypes.object,
  arrow: PropTypes.object,
};

Title.defaultProps = {
  icon1style: {
    height: '35px',
    pr: '20px',
  },
  icon2style: {
    height: '35px',
    pl: '20px',
  },
  descriptionStyle: {
    mb: '30px',
    width: '70%',
    fontSize: '14px',
  },
  arrow: {
    pt: '5px',
  },
  titleStyle: {
    mb: '0px',
    fontSize: '24px',
  },
};

export default Title;
