//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Banner.css';
import { SearchBox } from 'react-instantsearch/dom';

class Banner extends Component {
  render() {
    return (
      <div className="bannerContainer">
        <div id="banner">
          <div className="animated bounceInLeft" id="skyline" />
          <div id="tagline">
            <p className="animated bounceInLeft">
              Connect with safe and reliable experts for all of your crypto
              needs.
            </p>
            <div id="searchbox">
              <SearchBox
                translations={{
                  placeholder: 'What are you looking for?'
                }}
                autoFocus
              />
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
