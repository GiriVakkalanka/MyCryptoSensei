import React, { Component } from 'react';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from 'semantic-ui-react';

class SidebarTopPush extends Component {
  render() {
    return (
      <div>
        <Sidebar
          as={Menu}
          animation="push"
          direction="top"
          visible={true}
          inverted
        >
          <Menu.Item position="right" name="home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item style={{ paddingRight: '175' }} name="camera">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

export default SidebarTopPush;
