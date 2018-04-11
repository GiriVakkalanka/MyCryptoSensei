//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Header.css';
import Button from '../../interface/button/Button';

class Header extends Component {
  render() {
    return (
      <nav>
        <div id="header">
          <div id="logo">
            <p>MyCryptoSensei</p>
          </div>
          <div id="headerLoginButton">
            <Button type="login" label="Log in" />
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Header);
