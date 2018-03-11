import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import SenseiAvailability from './SenseiAvailability';

class AvailabilityWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<SenseiAvailability />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(AvailabilityWrapper);
