//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Landing.css';
import Header from './header/Header';
import Service from './service/Service';
import Banner from './banner/Banner';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        <div className="banner">
          <Banner/>
        </div>
        <div className="container">
          <div className="serviceOne">
            <Service icon="onboarding"/>
          </div>
          <div className="serviceTwo">
            <Service icon="whitepaper"/>
          </div>
          <div className="serviceThree">
            <Service icon="onboarding"/>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Landing);
