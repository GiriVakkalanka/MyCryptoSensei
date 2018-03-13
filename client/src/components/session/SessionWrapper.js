import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import SessionPage from './SessionPage';

class SessionWrapper extends Component {
  componentDidMount() {
    console.log(this.props.sessionPage);
  }
  render() {
    return (
      <div>
        <Drawer pusher={<SessionPage />} />
      </div>
    );
  }
}

function mapStateToProps({ sessionPage }) {
  return { sessionPage };
}

export default connect(mapStateToProps, actions)(SessionWrapper);
