//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Card, Segment, Grid, Header, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
      default:
        return this.renderNormalButton();
    }
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Button);
