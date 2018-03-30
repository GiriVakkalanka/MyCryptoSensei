//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div id="tagline">
          <p>Connect with safe and reliable experts for all of your crypto needs.</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Banner);
