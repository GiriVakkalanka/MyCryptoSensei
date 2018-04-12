//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Icon.css';
import Browse from '../../../images/Browse.png';
import Business from '../../../images/Business.png';
import Calendar from '../../../images/Calendar.png';
import Chat from '../../../images/Chat.png';
import Info from '../../../images/Info.png';
import Link from '../../../images/Link.png';
import Payment from '../../../images/Payment.png';
import Review from '../../../images/Review.png';
import Session from '../../../images/Session.png';
import Tax from '../../../images/Tax.png';
import Wallet from '../../../images/Wallet.png';
import Whitepaper from '../../../images/Whitepaper.png';

class Icon extends Component {
  renderIcon() {
    switch (this.props.type) {
      case 'wallet':
        return Wallet;
      case 'browse':
        return Browse;
      case 'whitepaper':
        return Whitepaper;
      case 'business':
        return Business;
      case 'tax':
        return Tax;
      case 'calendar':
        return Calendar;
      case 'info':
        return Info;
      case 'link':
        return Link;
      case 'payment':
        return Payment;
      case 'review':
        return Review;
      case 'chat':
        return Chat;
      default:
        return Wallet;
    }
  }
  render() {
    return <img id="iconComponent" src={this.renderIcon()} />;
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Icon);
