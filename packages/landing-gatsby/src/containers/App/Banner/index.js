import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Input from 'common/src/components/Input';
import FeatureBlock from 'common/src/components/FeatureBlock';
import ParticlesComponent from '../particles';
import Container from 'common/src/components/UI/Container';
import { BannerSquareShape } from '../app.style';
import { ButtonWrapper, EmailInputWrapper, Sun } from './banner.style';

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  image,
  imageArea,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appScreenshot: file(
        relativePath: { eq: "image/app/HeroScreenshot.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box {...SectionWrapper}>
      <ParticlesComponent />
      <Sun />
      <BannerSquareShape />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <EmailInputWrapper>
              <Input
                inputType="email"
                placeholder="Enter your email address"
                iconPosition="left"
                aria-label="email"
              />
            </EmailInputWrapper>
            <ButtonWrapper></ButtonWrapper>
          </Box>
          <Box {...col} {...imageArea}>
            <Box {...image}>
              <Image
                fluid={
                  (Data.appScreenshot !== null) | undefined
                    ? Data.appScreenshot.childImageSharp.fluid
                    : {}
                }
                alt="Domain Image"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  textArea: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '70px',
    pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-90px',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '52%'],
    ml: 'auto',
  },
  title: {
    content: 'Processes and tools for self-managed and distributed teams',
    fontSize: ['18px', '24px', '24px', '30px', '34px'],
    fontWeight: '700',
    color: '#091632',
    letterSpacing: '1.2px',
    lineHeight: '42px',
    mb: '10px',
    mt: '160px',
  },
  description: {
    content:
      'Become part of the future of digital collaboration. Join our community of teal organisation architects.',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '28px',
    mb: '0px',
  },
  button: {
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  btnStyleTwo: {
    minWidth: '156px',
    ml: '15px',
    mb: '60px',
    bg: '#fff',
    color: 'rgb(26, 115, 232)',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
};

export default DomainSection;
