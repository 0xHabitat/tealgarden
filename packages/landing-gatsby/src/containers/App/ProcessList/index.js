import React from 'react';
import 'rc-tabs/assets/index.css';
import Container from 'common/src/components/UI/Container';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Box from 'common/src/components/Box';
import ListItemWrapper, {
  SectionWrapper,
  CardBg,
  Icon,
  IconWrapper,
  ContentWrapper,
} from './processList.style';

const ProcessList = ({
  title,
  description,
  icon1,
  icon2,
  ListElementWrapper,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allProcessesJson(limit: 10) {
        edges {
          node {
            id
            summary {
              abstract
            }
            icons {
              endIconUrl
              startIconUrl
            }
            title
          }
        }
      }
    }
  `);
  return (
    <SectionWrapper>
      <Container>
        <CardBg>
          <Box>
            {Data.allProcessesJson.edges.map((process, index) => (
              <ListItemWrapper {...ListElementWrapper} key={index}>
                <IconWrapper className="icon__wrapper">
                  <Icon src="#" {...icon1}>
                    {' '}
                    img{' '}
                  </Icon>
                  <p>>>></p>
                  <Icon src="#" {...icon2}>
                    {' '}
                    img{' '}
                  </Icon>
                </IconWrapper>
                <ContentWrapper className="content__wrapper">
                  <Heading {...title} content={process.node.title} />
                  <Text
                    {...description}
                    content={
                      process.node.summary.abstract.substr(0, 100) + '...'
                    }
                  />
                </ContentWrapper>
              </ListItemWrapper>
            ))}
          </Box>
        </CardBg>
      </Container>
    </SectionWrapper>
  );
};

ProcessList.propTypes = {
  icon1: PropTypes.object,
  icon2: PropTypes.object,
  description: PropTypes.object,
  title: PropTypes.object,
  ListElementWrapper: PropTypes.object,
};

ProcessList.defaultProps = {
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
  ListElementWrapper: {
    borderbottom: '1px solid',
    borderColor: 'rgba(0,0,0,0.102)',
  },
};

export default ProcessList;
