import React, { Component } from 'react';
import Header from './Header';
import { Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';

class SidebarLeftSlideAlong extends Component {
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Sidebar
          as={Menu}
          width="thin"
          visible={visible}
          icon={false}
          vertical
          inverted
          fixed
          animation="push"
        >
          <Menu.Item name="home">
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
          <Header />
          <Button
            style={{ marginTop: '50', marginLeft: '40' }}
            onClick={this.toggleVisibility}
          >
            Toggle Visibility
          </Button>
        </Sidebar.Pusher>
      </div>
    );
  }
}

export default SidebarLeftSlideAlong;
