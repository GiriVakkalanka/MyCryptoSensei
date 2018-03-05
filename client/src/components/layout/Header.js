import React, { Component } from 'react';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Container
} from 'semantic-ui-react';

class SidebarTopPush extends Component {
  render() {
    return (
      <div>
        <Menu attached="top" borderless fitted visible={true} inverted>
          <Menu.Item position="right" name="home">
            <Icon color="yellow" name="home" />
            <p style={{ color: 'yellow' }}>Home</p>
          </Menu.Item>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item name="camera">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SidebarTopPush;
