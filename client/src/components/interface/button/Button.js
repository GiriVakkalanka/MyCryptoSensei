//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';
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
  renderButton() {
    switch (this.props.type) {
      case 'link':
        return this.renderLinkButton();
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
