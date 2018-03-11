import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import SelectSpecialization from './SelectSpecialization';

class ExpertiseWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<SelectSpecialization />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(ExpertiseWrapper);
