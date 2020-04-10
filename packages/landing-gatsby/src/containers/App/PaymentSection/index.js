import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { PaymentCircleShape } from '../app.style';

import ImageOne from 'common/src/assets/image/app/mockup.png';

const PaymentSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  textAreaRow,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  sectionSubTitle,
  btnStyle,
}) => {
  return (
    <Box {...sectionWrapper} id="payments">
      <PaymentCircleShape />

      <Container fullWidth noGutter className="control-sec-container payment">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image src={ImageOne} alt="Info Image One" />
              </Fade>
            </Card>
            <Card
              {...imageWrapper}
              {...imageWrapperTwo}
              className="cardExtraImage"
            >
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text content="TEAL.GARDEN" {...sectionSubTitle} />
            <FeatureBlock
              title={
                <Heading
                  content="GET ON BOARD, JOIN THE CREW"
                  {...title}
                />
              }
              description={
                <Text
                  content="Discover the latest dApps, plugins & processes for the future of work.
                  Share your own organisation architectures!
                  We are open for all submissions & inspirations."
                  {...description}
                />
              }
              button={<Button title="SUBMIT YOUR PROCESS" {...btnStyle} />}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

PaymentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '40px', '40px', '80px', '200px'],
    pb: ['80px', '80px', '80px', '180px', '150px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: [1, 1, '45%', '45%', '47%'],
    mt: '-50px',
    zIndex: '1',
  },
  imageArea: {
    width: [0, 0, '52%', '45%', '30%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
    ml: '90px',
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#E26C65',
    textTransform: 'uppercase',
    mb: '10px',
  },
  title: {
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '0.07em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '420px', '420px'],
    textAlign: ['center', 'left'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left'],
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default PaymentSection;
