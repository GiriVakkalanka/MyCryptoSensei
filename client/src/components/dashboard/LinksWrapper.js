import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import SelectLinks from './SelectLinks';

class LinksWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<SelectLinks />} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(LinksWrapper);
