//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';
import Drawer from '../layout/Drawer';
import Admin from './Admin';

class AdminWrapper extends Component {
  render() {
    return (
      <div>
        <Drawer pusher={<Admin />} />
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(AdminWrapper);
