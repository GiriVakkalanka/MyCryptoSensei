import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Item } from 'semantic-ui-react';
import WindowListItem from './WindowListItem';

class WindowList extends Component {
  renderList() {
    const windows = this.props.auth ? this.props.auth.windows : [];
    return _.map(windows, window => {
      return (
        <WindowListItem
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
      <div style={{ maxHeight: '210', overflow: 'auto' }}>
        <Segment>
          <Item.Group divided>{this.renderList()}</Item.Group>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(WindowList);
