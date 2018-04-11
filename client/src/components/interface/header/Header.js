//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <h1 id="logo">MyCryptoSensei</h1>
      </nav>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Header);
