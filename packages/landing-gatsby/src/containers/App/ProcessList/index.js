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
  arrow,
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
                  <Icon
                    src={process.node.icons.startIconUrl}
                    alt={process.node.title}
                    {...icon1}
                  />
                  <Text content=">>>" {...arrow} />
                  <Icon
                    src={process.node.icons.endIconUrl}
                    alt={process.node.title}
                    {...icon2}
                  />
                </IconWrapper>
                <ContentWrapper className="content__wrapper">
                  <Heading {...title} content={process.node.title} />
                  <Text
                    {...description}
                    content={
                      process.node.summary.abstract.substr(0, 180) + '...'
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
  arrow: PropTypes.object,
};

ProcessList.defaultProps = {
  icon1: {
    height: '35px',

    pr: '20px',
  },
  icon2: {
    height: '35px',
    pl: '20px',
  },
  description: {
    mb: '30px',
    width: '90%',
    fontSize: '14px',
    textOverflow: 'ellipsis',
  },
  arrow: {
    pt: '5px',
  },
  title: {
    mb: '0px',
    fontSize: '18px',
  },
  ListElementWrapper: {
    borderBottom: '2px solid',
    borderColor: '#E1E4E8',
    m: '30px 30px 0px 30px',
  },
};

export default ProcessList;
