import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import Sessions from './Sessions';

class SessionsWrapper extends Component {
  componentDidMount() {
    this.props.fetchSessions();
  }
  render() {
    return (
      <div>
        <Drawer pusher={<Sessions />} />
      </div>
    );
  }
}

function mapStateToProps({ sessions }) {
  return { sessions };
}

export default connect(mapStateToProps, actions)(SessionsWrapper);
