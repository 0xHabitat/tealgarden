import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import ColonyImg from 'common/src/assets/image/app/Colony.png';
import SlackImg from 'common/src/assets/image/app/Slack.png';
import GnosisImg from 'common/src/assets/image/app/Gnosis.svg';
import TealgardenImg from 'common/src/assets/image/app/tealgarden.svg';
import { ExternalLink } from 'react-external-link';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  cardStyleDotted,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
}) => {
  return (
    <PartnerHistoryWrapper id="partners">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} style={{ flexDirection: 'column' }}>
            <Text content="SEARCH AND GET FOUND" {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading content="WE LOVE OPEN SOURCE" {...title} />}
              description={
                <Text
                  content="We encourage Open Source projects to contribute, share tools and achievements among the Teal.Garden Community."
                  {...description}
                />
              }
              button={
                <ExternalLink href="https://calendly.com/deora-earth/teal-garden">
                  <Button title="SUBMIT A TOOL" {...btnStyle} />
                </ExternalLink>
              }
            />
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <ExternalLink href="https://colony.io/">
                  <Image src={ColonyImg} alt="Colony" />
                  <Text content="Colony" />
                </ExternalLink>
              </Card>
              <Card className="card" {...cardStyle}>
                <ExternalLink href="https://mattermost.com/">
                  <Image src={SlackImg} alt="Mattermost" />
                  <Text content="Mattermost" />
                </ExternalLink>
              </Card>
              <Card className="card" {...cardStyle}>
                <ExternalLink href="https://gnosis-safe.io/">
                  <Image src={GnosisImg} alt="Gnosis Safe" />
                  <Text content="Gnosis Safe" />
                </ExternalLink>
              </Card>
              <Card className="card" {...cardStyleDotted}>
                <ExternalLink href="https://calendly.com/deora-earth/teal-garden">
                  <Image src={TealgardenImg} alt="your tool" />
                  <Text content="submit a tool" />
                </ExternalLink>
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </PartnerHistoryWrapper>
  );
};

PartnerHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

PartnerHistory.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  cardStyle: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    border: '2px solid #091632',
    boxShadow: '2px 2px 0px #091632',
  },
  cardStyleDotted: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    border: '2px dashed #E1E4E8',
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '0.07em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '490px', '490px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
  },
  sectionSubTitle: {
    as: 'span',
    textAlign: 'left',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#82E3E3',
    mb: '10px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardArea: {
    pl: [0, 0, '40px', 0, 0],
  },
};

export default PartnerHistory;
