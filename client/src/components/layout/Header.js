import React, { Component } from 'react';
import LayoutTest from './LayoutTest';
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
  state = { visible: true };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    return (
      <div>
        <Menu
          style={{ marginBottom: 50 }}
          attached="top"
          borderless
          fitted
          visible={true}
          inverted
        >
          <Menu.Item
            position="right"
            name="home"
            onClick={this.toggleVisibility}
          >
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
        <Sidebar
          as={Menu}
          width="thin"
          visible={this.state.visible}
          icon={false}
          vertical
          inverted
          fixed
          animation="push"
        >
          <Menu.Item name="home" onClick={this.toggleVisibility}>
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
        </Sidebar>
        <Sidebar.Pusher>
          <LayoutTest />
        </Sidebar.Pusher>
      </div>
    );
  }
}

export default SidebarTopPush;
