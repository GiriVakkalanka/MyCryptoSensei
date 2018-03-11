import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import SelectServices from './SelectServices';

class ServicesWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<SelectServices />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(ServicesWrapper);
