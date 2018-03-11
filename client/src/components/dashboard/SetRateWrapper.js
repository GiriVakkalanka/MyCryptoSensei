import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import SetRate from './SetRate';

class SetRateWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<SetRate />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SetRateWrapper);
