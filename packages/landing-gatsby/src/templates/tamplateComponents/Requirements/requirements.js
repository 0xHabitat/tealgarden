import React from 'react';
import PropTypes from 'prop-types';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import Container from 'common/src/components/UI/Container';
import 'rc-tabs/assets/index.css';
import { SectionWrapper } from './requirements.style';

const Requirements = ({ tabsStyle }) => {
  return (
    <Container>
      <SectionWrapper>
        <Tabs
          {...tabsStyle}
          defaultActiveKey="loginForm"
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent />}
        >
          <TabPane tab="ORG STRUCTURE" key="orgStructure">
            <Heading content="Tab 1" />
            <Text content="Does it work ?" />
          </TabPane>

          <TabPane tab="POLICIES" key="policies">
            <Heading content="Tab 2" />
            <Text content="Does it work ?" />
          </TabPane>

          <TabPane tab="Roles" key="roles">
            <Heading content="Tab 3" />
            <Text content="Does it work ?" />
          </TabPane>

          <TabPane tab="Tools" key="tools">
            <Heading content="Tab 4" />
            <Text content="Does it work ?" />
          </TabPane>

          <TabPane tab="Values" key="values">
            <Heading content="Tab 5" />
            <Text content="Does it work ?" />
          </TabPane>
        </Tabs>
      </SectionWrapper>
    </Container>
  );
};

Requirements.propTypes = {
  tabsStyle: PropTypes.object,
};

Requirements.defaultProps = {
  tabsStyle: {
    background: '#FFF',
    border: '2px solid #091632',
    borderRadius: '5px',
    boxShadow: '2px 2px 0px #091632',
  },
};

export default Requirements;
