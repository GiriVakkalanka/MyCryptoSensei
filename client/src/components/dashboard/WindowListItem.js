//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Header, Icon, Item } from 'semantic-ui-react';
import moment from 'moment';

class WindowListItem extends Component {
  render() {
    return (
      <Item>
        <Item.Image>
          <Header as="h4" icon>
            <Icon name="checked calendar" />
          </Header>
        </Item.Image>
        <Item.Content>
          <Item.Header>
            {moment(this.props.date).format('dddd, MMMM Do YYYY')}
          </Item.Header>
          <Item.Header>
            {moment(this.props.startTime).format('h:mm A')} -{' '}
            {moment(this.props.endTime).format('h:mm A')}
          </Item.Header>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(WindowListItem);
