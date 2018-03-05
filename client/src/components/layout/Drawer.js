import React, { Component } from 'react';
import Header from './Header';
import LayoutTest from './LayoutTest';
import { Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';

class SidebarLeftSlideAlong extends Component {
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    // const { visible } = this.state;
    // const pusher = this.props.pusher;
    return (
      <div>
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
        <Sidebar.Pusher>{<div>{this.props.pusher}</div>}</Sidebar.Pusher>
      </div>
    );
  }
}

export default SidebarLeftSlideAlong;
