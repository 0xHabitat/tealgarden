import React, { Fragment } from 'react';
import { ListWrapper } from './list.style';

const List = ({ className, text, ...props }) => (
  <ListWrapper className={className}>
    <Fragment>
      {text.map((benefit, index) => (
        <li key={`benefit-${index}`}>{benefit}</li>
      ))}
    </Fragment>
  </ListWrapper>
);

export default List;
