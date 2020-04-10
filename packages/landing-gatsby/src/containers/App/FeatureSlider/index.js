import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
import Container from 'common/src/components/UI/Container';
import FeatureSliderWrapper from './featureSlider.style';
import Image1 from 'common/src/assets/image/app/slide-2.png';
import Image2 from 'common/src/assets/image/app/slide-1.png';
import Image3 from 'common/src/assets/image/app/slide-3.png';
import Image4 from 'common/src/assets/image/app/slide-4.png';
import Image5 from 'common/src/assets/image/app/slide-5.png';
import Thumb1 from 'common/src/assets/image/app/category-1.png';
import Thumb2 from 'common/src/assets/image/app/category-2.png';
import Thumb3 from 'common/src/assets/image/app/category-3.png';
import Thumb4 from 'common/src/assets/image/app/category-4.png';
import Thumb5 from 'common/src/assets/image/app/category-5.png';
import Thumb6 from 'common/src/assets/image/app/category-6.png';

// import DomainSection from '../container/Hosting/Domain';
const images = [
  {
    original: `${Image1}`,
    thumbnail: `${Thumb1}`,
    thumbnailLabel: 'Crypto',
    originalAlt: 'slide one',
    thumbnailAlt: 'thumb one',
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb2}`,
    thumbnailLabel: 'Meetings',
    originalAlt: 'slide two',
    thumbnailAlt: 'thumb two',
  },
  {
    original: `${Image3}`,
    thumbnail: `${Thumb3}`,
    thumbnailLabel: 'Governance',
    originalAlt: 'slide three',
    thumbnailAlt: 'thumb three',
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb4}`,
    thumbnailLabel: 'Finance',
    originalAlt: 'slide four',
    thumbnailAlt: 'thumb four',
  },
  {
    original: `${Image4}`,
    thumbnail: `${Thumb5}`,
    thumbnailLabel: 'Know-how',
    originalAlt: 'slide five',
    thumbnailAlt: 'thumb five',
  },
  {
    original: `${Image5}`,
    thumbnail: `${Thumb6}`,
    thumbnailLabel: 'Automation',
    originalAlt: 'slide six',
    thumbnailAlt: 'thumb six',
  },
];

const FeatureSlider = ({ sectionSubTitle, sectionTitle, sectionHeader }) => {
  return (
    <FeatureSliderWrapper>
      <div className="sun" />
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={false}
            autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionHeader: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: 'DEORA EMPOWERS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#E26C65',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    content: 'DISTRIBUTED ORGANISATION ARCHITECUTRES',
    textAlign: 'center',
    fontSize: ['18px', '24px', '24px', '30px', '34px'],
    fontWeight: '700',
    color: '#091632',
    letterSpacing: '1.2px',
    lineHeight: '42px',
    mb: '0',
  },
};

export default FeatureSlider;
