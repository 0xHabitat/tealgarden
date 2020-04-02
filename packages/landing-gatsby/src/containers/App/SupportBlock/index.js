import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from 'common/src/components/UIElements/Logo';
import SectionWrapper, { ImageSlider, ImageSlide } from './supportBlock.style';

const SupportBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      appJson {
        supporter {
          id
          link
          logo {
            publicURL
          }
          name
        }
      }
    }
  `)

  return (
    <SectionWrapper>
      <ImageSlider>
        <ImageSlide>
          {data.appJson.supporter.map(item => (
            <Logo
              key={`slide1__key${item.id}`}
              logoSrc={item.logo.publicURL}
              title={item.name}
            />
          ))}
        </ImageSlide>
        <ImageSlide>
          {data.appJson.supporter.map(item => (
            <Logo
              key={`slide2__key${item.id}`}
              logoSrc={item.logo.publicURL}
              title={item.name}
            />
          ))}
        </ImageSlide>
      </ImageSlider>
    </SectionWrapper>
  );
};

export default SupportBlock;
