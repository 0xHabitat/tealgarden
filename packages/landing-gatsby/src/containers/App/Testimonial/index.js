import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import SliderDes from '../sliderDescription';
import Image1 from 'common/src/assets/image/app/6.png';
import Image2 from 'common/src/assets/image/app/2.jpg';
import Image3 from 'common/src/assets/image/app/5.jpg';
import Image4 from 'common/src/assets/image/app/testi.jpg';
import Image5 from 'common/src/assets/image/app/1.jpeg';

const TestimonialSection = ({ sectionWrapper }) => {
  const Data = useStaticQuery(graphql`
    query {
      appJson {
        testimonials {
          id
          name
          designation
          description
        }
      }
    }
  `);

  const images = [
    {
      thumbnail: `${Image1}`,
      thumbnailAlt: 'thumb one',
      description: <SliderDes data={Data.appJson.testimonials[0]} />,
    },
    {
      thumbnail: `${Image2}`,
      thumbnailAlt: 'thumb two',
      description: <SliderDes data={Data.appJson.testimonials[1]} />,
    },
    {
      thumbnail: `${Image3}`,
      thumbnailAlt: 'thumb three',
      description: <SliderDes data={Data.appJson.testimonials[2]} />,
    },
    {
      thumbnail: `${Image4}`,
      thumbnailAlt: 'thumb four',
      description: <SliderDes data={Data.appJson.testimonials[3]} />,
    },
    {
      thumbnail: `${Image5}`,
      thumbnailAlt: 'thumb five',
      description: <SliderDes data={Data.appJson.testimonials[4]} />,
    },
  ];

  return (
    <Box
      {...sectionWrapper}
      className="testimonialSlider"
      id="testimonialSection"
    >
      <Container>
        <Box className="testimonialDesWrapper">
          <ImageGallery
            items={images}
            originalClass="Testimonial-img"
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
          />
        </Box>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  title: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: ['20px', '80px', '0px', '80px', '80px'],
  },

  sectionSubTitle: {
    content: 'TESTIMONIAL',
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '16px',
    letterSpacing: '0.11em',
    fontWeight: '800',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
  },
};

export default TestimonialSection;
