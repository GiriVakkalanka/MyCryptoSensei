import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import Browse from './Browse';

class BrowseWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<Browse />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(BrowseWrapper);
