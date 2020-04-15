import styled from 'styled-components';
import { variant, alignItems, boxShadow, themeGet } from 'styled-system';
import { buttonStyle, colorStyle, sizeStyle } from '../customVariant';
import { base } from '../base';

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.black', '#091632')};
  background-color: ${themeGet('colors.primary', '#FFF85A')};
  min-height: ${themeGet('heights.3', '48')}px;
  min-width: ${themeGet('widths.3', '48')}px;
  border: 2px solid #091632;
  border-radius: 5px;
  font-size: ${themeGet('fontSizes.2', '14')}px;
  font-weight: ${themeGet('fontWeights.4', '500')};
  text-transform: capitalize;
  padding-top: ${themeGet('space.2', '8')}px;
  padding-bottom: ${themeGet('space.2', '8')}px;
  padding-left: ${themeGet('space.4', '15')}px;
  padding-right: ${themeGet('space.4', '15')}px;
  transition: all 0.3s ease;
  span.btn-text {
    padding-left: ${themeGet('space.1', '4')}px;
    padding-right: ${themeGet('space.1', '4')}px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &.is-material {
    box-shadow: 2px 2px 0px #091632 !important;
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet('space.2', '8')}px;
      padding-right: ${themeGet('space.2', '8')}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes,
};

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
