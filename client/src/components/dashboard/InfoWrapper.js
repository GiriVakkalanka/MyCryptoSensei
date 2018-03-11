import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import AddInfo from './AddInfo';

class InfoWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<AddInfo />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(InfoWrapper);
