//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="bannerContainer">
        <div id="banner">
          <div className="animated bounceInLeft" id="skyline"></div>
          <div id="tagline">
            <p className="animated bounceInLeft">Connect with safe and reliable experts for all of your crypto needs.</p>
            <div className="animated bounceInLeft" id="getStartedButton">
            Get Started
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Banner);
