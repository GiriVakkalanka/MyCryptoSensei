//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from './Drawer';
import LayoutTest from './LayoutTest';

class TestWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<LayoutTest />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(TestWrapper);
