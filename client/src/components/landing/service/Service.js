//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Service.css';
import teacher from '../../../images/teacher.png';
import whitepaper from '../../../images/whitepaper.png';

class Service extends Component {
  renderIcon(){
    switch (this.props.icon) {
      case "onboarding":
        return teacher;
      case "whitepaper":
        return whitepaper;
      default:
        return teacher;
    }
    return teacher;
  }
  render() {
    return (
      <div id="service">
        <img id="icon" src={this.renderIcon()}/>
        <h1 id="serviceName">Service</h1>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Service);
