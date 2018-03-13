import React, { Component } from 'react';
//import LayoutTest from './LayoutTest';
import { Sidebar, Menu, Icon, Header } from 'semantic-ui-react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Drawer extends Component {
  renderButtons() {
    if (this.props.auth && this.props.auth.sensei) {
      return (
        <div>
          <Menu.Item as={Header}>Sensei</Menu.Item>
          <Menu.Item
            onClick={() =>
              this.props.history.push('/dashboard/sensei/requests')}
          >
            <Icon color="yellow" name="users" />
            <div style={{ color: 'yellow' }}>Requests</div>
          </Menu.Item>
          <Menu.Item
            onClick={() =>
              this.props.history.push('/dashboard/sensei/sessions')}
          >
            <Icon color="yellow" name="hourglass end" />
            <div style={{ color: 'yellow' }}>Sessions</div>
          </Menu.Item>
          <Menu.Item
            onClick={() =>
              this.props.history.push('/dashboard/sensei/schedule')}
          >
            <Icon color="yellow" name="checked calendar" />
            <div style={{ color: 'yellow' }}>Availability</div>
          </Menu.Item>
          <Menu.Item
            onClick={() =>
              this.props.history.push('/dashboard/sensei/services')}
          >
            <Icon color="yellow" name="signup" />
            <div style={{ color: 'yellow' }}>Services</div>
          </Menu.Item>
          <Menu.Item
            onClick={() =>
              this.props.history.push('/dashboard/sensei/expertise')}
          >
            <Icon color="yellow" name="star" />
            <div style={{ color: 'yellow' }}>Expertise</div>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.props.history.push('/dashboard/sensei/rate')}
          >
            <Icon color="yellow" name="dollar" />
            <div style={{ color: 'yellow' }}>Rate</div>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.props.history.push('/dashboard/sensei/info')}
          >
            <Icon color="yellow" name="info circle" />
            <div style={{ color: 'yellow' }}>Info</div>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.props.history.push('/dashboard/sensei/links')}
          >
            <Icon color="yellow" name="chain" />
            <div style={{ color: 'yellow' }}>Links</div>
          </Menu.Item>

          <Menu.Item as={Header}>User</Menu.Item>

          <Menu.Item onClick={() => this.props.history.push('/')}>
            <Icon color="yellow" name="home" />
            <div style={{ color: 'yellow' }}>Home</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/browse')}>
            <Icon color="yellow" name="search" />
            <div style={{ color: 'yellow' }}>Browse</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/sessions')}>
            <Icon color="yellow" name="users" />
            <div style={{ color: 'yellow' }}>Sessions</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/requests')}>
            <Icon color="yellow" name="hourglass end" />
            <div style={{ color: 'yellow' }}>Requests</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/services')}>
            <Icon color="yellow" name="question circle" />
            <div style={{ color: 'yellow' }}>Looking for</div>
          </Menu.Item>
        </div>
      );
    } else if (this.props.auth && !this.props.auth.sensei) {
      return (
        <div>
          <Menu.Item onClick={() => this.props.history.push('/')}>
            <Icon color="yellow" name="home" />
            <div style={{ color: 'yellow' }}>Home</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/browse')}>
            <Icon color="yellow" name="search" />
            <div style={{ color: 'yellow' }}>Browse</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/sessions')}>
            <Icon color="yellow" name="users" />
            <div style={{ color: 'yellow' }}>Sessions</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/requests')}>
            <Icon color="yellow" name="hourglass end" />
            <div style={{ color: 'yellow' }}>Requests</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/services')}>
            <Icon color="yellow" name="question circle" />
            <div style={{ color: 'yellow' }}>Looking for</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/apply')}>
            <Icon color="yellow" name="dollar" />
            <div style={{ color: 'yellow' }}>Be a Sensei</div>
          </Menu.Item>
        </div>
      );
    } else {
      return (
        <div>
          <Menu.Item onClick={() => this.props.history.push('/')}>
            <Icon color="yellow" name="home" />
            <div style={{ color: 'yellow' }}>Home</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/browse')}>
            <Icon color="yellow" name="search" />
            <div style={{ color: 'yellow' }}>Browse</div>
          </Menu.Item>
          <Menu.Item onClick={() => this.props.history.push('/apply')}>
            <Icon color="yellow" name="dollar" />
            <div style={{ color: 'yellow' }}>Be a Sensei</div>
          </Menu.Item>
        </div>
      );
    }
  }
  render() {
    // const { visible } = this.state;
    // const pusher = this.props.pusher;
    return (
      <div>
        <Sidebar
          as={Menu}
          width="thin"
          visible={this.props.drawer}
          icon={false}
          vertical
          inverted
          animation="push"
        >
          <Menu.Item onClick={() => this.props.toggleDrawer()}>
            <Icon name="arrow left" color="yellow" />
            <p style={{ color: 'yellow' }}>Hide</p>
          </Menu.Item>
          {this.renderButtons()}
        </Sidebar>
        <Sidebar.Pusher>{<div>{this.props.pusher}</div>}</Sidebar.Pusher>
      </div>
    );
  }
}

function mapStateToProps({ auth, drawer }) {
  return { auth, drawer };
}

export default connect(mapStateToProps, actions)(withRouter(Drawer));
