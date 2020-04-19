import React from 'react';
import 'rc-tabs/assets/index.css';
import Container from 'common/src/components/UI/Container';
import { SectionWrapper, CardBG } from './processList.style';
import ProcessListItem from '../ProcessListItem';

const ProcessList = () => {
  return (
    <SectionWrapper>
      <Container>
        <CardBG>
          <ProcessListItem />
        </CardBG>
      </Container>
    </SectionWrapper>
  );
};

export default ProcessList;
