//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Header, Icon, Item } from 'semantic-ui-react';
import moment from 'moment';
import Button from '../../interface/button/Button';
import './RequestWindowListItem.css';

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
      <div
        id="requestWindowListItemContainer"
        className="fadeInLeftBig"
        onClick={() => this.handleClick()}
      >
        <div id="availableOnLabel">
          <p>Available on</p>
        </div>
        <div id="availableDate">
          <p>{moment(this.props.date).format('dddd, MMMM Do YYYY')}</p>
        </div>
        <div id="fromLabel">
          <p>From</p>
        </div>
        <div id="availableWindow">
          <p>
            {moment(this.props.startTime).format('h:mm A')} to{' '}
            {moment(this.props.endTime).format('h:mm A')}
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ selectedWindow }) {
  return { selectedWindow };
}

export default connect(mapStateToProps, actions)(RequestWindowListItem);
