import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LayoutTest from './LayoutTest';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

import { Menu, Icon, Modal } from 'semantic-ui-react';
import Login from '../apply/Login';

class NavHeader extends Component {
  state = { visible: true };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  // //render header items
  // handleLoginModal(){
  //
  // }

  renderLoginButton() {
    return this.props.auth ? (
      <Menu.Item position="right" name="home" href="/api/logout">
        <div style={{ color: 'yellow' }}>Log out</div>
        <Icon color="yellow" name="user circle outline" />
      </Menu.Item>
    ) : (
      <Menu.Item position="right">
        Log in/Sign up
        <Icon color="yellow" name="user outline" />
      </Menu.Item>
    );
  }

  renderApplyButton() {
    console.log(this.props.auth);
    return this.props.auth ? (
      this.props.auth.sensei ? null : (
        <Menu.Item as={Link} to="/apply" position="right">
          <div style={{ color: 'yellow' }}>Apply to be a Sensei</div>
          <Icon color="yellow" name="dollar" />
        </Menu.Item>
      )
    ) : null;
  }

  renderAdminButton() {
    return (
      <Menu.Item as={Link} to="/admin">
        <div style={{ color: 'yellow' }}>Admin</div>
        <Icon color="yellow" name="key" />
      </Menu.Item>
    );
  }

  renderModalLoginButton() {
    return (
      <Modal trigger={this.renderLoginButton()}>
        <Modal.Content>
          <Login />
        </Modal.Content>
      </Modal>
    );
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
        <Menu.Item onClick={() => this.props.toggleDrawer()}>
          <div style={{ color: 'yellow' }}>Menu</div>
          <Icon
            style={{ marginLeft: 2, marginTop: 2 }}
            color="yellow"
            name="sidebar"
          />
        </Menu.Item>
        {this.renderApplyButton()}
        {this.renderModalLoginButton()}
        {this.renderAdminButton()}
      </Menu>
    );
  }
}

function mapStateToProps({ auth, drawer }) {
  return { auth, drawer };
}

export default connect(mapStateToProps, actions)(NavHeader);
