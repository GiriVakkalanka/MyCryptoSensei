import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutTest from './LayoutTest';
import * as actions from '../../actions';

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

class NavHeader extends Component {
  state = { visible: true };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  //render header items

  renderLoginButton() {
    return this.props.auth ? (
      <Menu.Item name="home" href="/api/logout">
        <div style={{ color: 'yellow' }}>Log out</div>
        <Icon color="yellow" name="user circle outline" />
      </Menu.Item>
    ) : (
      <Menu.Item position="right" href="/auth/google">
        Log in/Sign up
        <Icon color="yellow" name="user outline" />
      </Menu.Item>
    );
  }

  renderApplyButton() {
    return this.props.auth ? (
      this.props.auth.sensei ? null : (
        <Menu.Item position="right" href="/auth/google">
          <div style={{ color: 'yellow' }}>Apply to be a Sensei</div>
          <Icon color="yellow" name="dollar" />
        </Menu.Item>
      )
    ) : null;
  }

  render() {
    return (
      <Menu
        style={{ marginBottom: 50 }}
        attached="top"
        borderless
        fitted
        fixed
        visible={true}
        inverted
      >
        {this.renderApplyButton()}
        {this.renderLoginButton()}
      </Menu>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(NavHeader);
