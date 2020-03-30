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
import GoogleImg from 'common/src/assets/image/app/google.svg';
import AppleImg from 'common/src/assets/image/app/apple.svg';
import DribbleImg from 'common/src/assets/image/app/dribbble.svg';
import MailchimpImg from 'common/src/assets/image/app/mailchimp.svg';
import BackgroundImg from 'common/src/assets/image/app/partner-bg.png';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
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
            <Text content="TRUSTED PARTNERS" {...sectionSubTitle} />
            <FeatureBlock
              title={
                <Heading
                  content="Your Trusted Partner For Working Together"
                  {...title}
                />
              }
              description={
                <Text
                  content="You can trust us for any kind of services and some of the world class companies have also trusted us ."
                  {...description}
                />
              }
              button={<Button title="WORK HISTORY" {...btnStyle} />}
            />
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={GoogleImg} alt="Google Inc" />
                <Text content="Google Inc" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={AppleImg} alt="Apple Inc" />
                <Text content="Apple" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={DribbleImg} alt="Dribble Inc" />
                <Text content="Dribble" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={MailchimpImg} alt="MailChimp Inc" />
                <Text content="MailChimp" />
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
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.010em',
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
    color: '#1a73e8',
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
