//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Service.css';
import wallet from '../../../images/Wallet.png';
import whitepaper from '../../../images/WhitepaperAnalysis.png';
import business from '../../../images/Business.png';
import tax from '../../../images/Tax.png';

class Service extends Component {
  handleClick() {
    console.log('click');
  }
  renderIcon() {
    switch (this.props.icon) {
      case 'wallet':
        return wallet;
      case 'whitepaper':
        return whitepaper;
      case 'business':
        return business;
      case 'tax':
        return tax;
      default:
        return wallet;
    }
  }
  render() {
    return (
      <div onClick={() => this.handleClick()} id="service">
        <img id="icon" src={this.renderIcon()} />
        <div id="serviceNameContainer">
          <h1 id="serviceName">{this.props.service}</h1>
          <p id="description"> {this.props.description} </p>
          <div onClick={() => this.handleClick()}>
            <h1 id="getStartedServiceButton">Get Started</h1>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Service);
