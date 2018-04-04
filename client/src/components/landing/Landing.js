//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Landing.css';
import Header from './header/Header';
import Service from './service/Service';
import Banner from './banner/Banner';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="banner">
          <Banner />
        </div>
        <div className="salesLine">
          <p id="salesText">Talk to a Sensei about...</p>
        </div>
        <div className="container">
          <div className="serviceOne fadeInLeft">
            <Service
              icon="wallet"
              service="Wallet Setup"
              description="Learn how to purchase bitcoin and other altcoins and store them safely in a cold-storage wallet."
            />
          </div>
          <div className="serviceTwo fadeInUp">
            <Service
              icon="whitepaper"
              service="Whitepaper Analysis"
              description="Talk to the experts about the technical foundations and business opportunities of any token."
            />
          </div>
          <div className="serviceThree fadeInRight">
            <Service
              icon="tax"
              service="Tax Consultation"
              description="The IRS is ready. Are you? Consult with a CPA to understand the tax rules of crypto investing."
            />
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
