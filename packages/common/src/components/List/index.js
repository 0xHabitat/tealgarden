import React, { Fragment } from 'react';
import { ListWrapper } from './list.style';

const List = ({ className, icon, text, link, ...props }) => (
  <ListWrapper className={className}>
    <Fragment>
      <ul>
        <li>{text}</li>
      </ul>
    </Fragment>
  </ListWrapper>
);

export default List;
