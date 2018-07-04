//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Card, Segment, Grid, Header, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from '../../apply/Login';
import MenuItem from '../menuItem/MenuItem';
import './Button.css';

class Button extends Component {
  renderLinkButton() {
    return (
      <Link to={this.props.to}>
        <button id="buttonContainer" onClick={() => this.props.onClick()}>
          {this.props.label}
        </button>
      </Link>
    );
  }

  renderNormalButton() {
    return (
      <button id="buttonContainer" onClick={() => this.props.onClick()}>
        {this.props.label}
      </button>
    );
  }

  renderLoginButton() {
    return (
      <a href="/auth/google">
        <button id="buttonContainer">{this.props.label}</button>
      </a>
    );
  }

  // renderLoginButton() {
  //   return this.renderModalButton();
  // }

  renderUserButton() {
    return (
      <div className="userButtonDropdownContainer">
        <button id="userButtonContainer">
          <i id="userIcon" className="fa fa-user fa-3x white" />
        </button>
        <div className="dropdownArrow" />
        <div className="dropdownContent">
          <MenuItem type="user" />
          <MenuItem type="user" />
          <MenuItem type="user" />
        </div>
      </div>
    );
  }

  renderModalButton() {
    return (
      <Modal
        size="small"
        trigger={<button id="buttonContainer">{this.props.label}</button>}
      >
        <Modal.Content>{this.props.content}</Modal.Content>
      </Modal>
    );
  }

  renderButton() {
    switch (this.props.type) {
      case 'link':
        return this.renderLinkButton();
      case 'login':
        return this.renderLoginButton();
      case 'modal':
        return this.renderModalButton();
      case 'user':
        return this.renderUserButton();
      default:
        return this.renderNormalButton();
    }
  }

  //To Add
  //OptionSelect button(Stay selected)
  //Vertical and horizontal menu buttons?
  //Login icon button and hover Modal
  //notification button and hover Modal
  //

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Button);
