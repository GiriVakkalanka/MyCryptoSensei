import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Segment, Item } from 'semantic-ui-react';
import RequestWindowListItem from './RequestWindowListItem';

class RequestWindowList extends Component {
  renderList() {
    const windows = this.props.senseiPage ? this.props.senseiPage.windows : [];
    return _.map(windows, window => {
      return (
        <RequestWindowListItem
          key={window._id}
          date={window.startDate}
          startTime={window.startTime}
          endTime={window.endTime}
        />
      );
    });
  }
  render() {
    return (
      <div style={{ maxHeight: 230, overflow: 'auto' }}>
        <Segment>
          <Item.Group divided>{this.renderList()}</Item.Group>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps({ senseiPage }) {
  return { senseiPage };
}

export default connect(mapStateToProps, actions)(RequestWindowList);
