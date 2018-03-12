//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Header, Icon, Item, Button } from 'semantic-ui-react';
import moment from 'moment';

class RequestWindowListItem extends Component {
  handleClick() {
    const selectedWindow = {
      date: this.props.date,
      startTime: this.props.startTime,
      endTime: this.props.endTime
    };
    this.props.selectWindow(selectedWindow);
  }
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
          <Item.Extra>
            <Button onClick={() => this.handleClick()} floated="right">
              Choose window
              <Icon name="right chevron" />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ selectedWindow }) {
  return { selectedWindow };
}

export default connect(mapStateToProps, actions)(RequestWindowListItem);