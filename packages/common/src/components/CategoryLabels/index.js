import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
} from 'styled-system';
import { themed } from '../base';

const CategoryLable = styled('div')(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
  themed('Card')
);

const Card = ({ content, ...props }) => (
  <CategoryLable {...props}>{content}</CategoryLable>
);

Card.propTypes = {
  children: PropTypes.any,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...opacity.propTypes,
};

Card.defaultProps = {
  background: '#E6EBF0',
  opacity: 0.5,
  borderRadius: '2px',
};

export default CategoryLable;
