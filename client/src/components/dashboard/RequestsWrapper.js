import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Drawer from '../layout/Drawer';
import Requests from './Requests';

class RequestsWrapper extends Component {
  componentDidMount() {
    this.props.fetchRequests();
    console.log(this.props.requests);
  }
  render() {
    return (
      <div>
        <Drawer pusher={<Requests />} />
      </div>
    );
  }
}

function mapStateToProps({ requests }) {
  return { requests };
}

export default connect(mapStateToProps, actions)(RequestsWrapper);
