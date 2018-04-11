import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import RequestWindowListItem from './RequestWindowListItem';
import './RequestWindowList.css';

class RequestWindowList extends Component {
  renderList() {
    const windows = this.props.senseiPage ? this.props.senseiPage.windows : [];
    return _.map(windows, window => {
      return (
        <li>
          <RequestWindowListItem
            key={window._id}
            date={window.startDate}
            startTime={window.startTime}
            endTime={window.endTime}
          />
        </li>
      );
    });
  }
  render() {
    return (
      <div style={{ maxHeight: 230, overflow: 'auto' }}>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ senseiPage }) {
  return { senseiPage };
}

export default connect(mapStateToProps, actions)(RequestWindowList);
