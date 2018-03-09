//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { Button, Segment } from 'semantic-ui-react';

import moment from 'moment';

class WindowSelector extends Component {
  componentDidMount() {
    console.log(this.props.date);
  }
  handleDate(event, date) {
    //const today = Date.now();
    //console.log(typeof today);
    const pickedDate = new Date(date);
    //const dateString = pickedDate.toJSON();
    // console.log(date.toJSON());
    //
    // console.log(date);
    // console.log(pickedDate.getDate());
    // console.log(todaysDate.getTime());
    this.props.changeDate(pickedDate);
  }

  handleTime(event, time, start) {
    const pickedTime = new Date(time);

    if (start) {
      this.props.changeStarttime(pickedTime);
    } else {
      this.props.changeEndtime(pickedTime);
    }
  }

  handleSave() {
    //console.log('save called')
    const timeWindow = {
      date: this.props.date.date,
      startTime: this.props.date.startTime,
      endTime: this.props.date.endTime
    };
    this.props.saveTimeWindow(timeWindow);
  }

  render() {
    return (
      <Segment compact>
        <DatePicker
          hintText="Select window date here"
          mode="landscape"
          onChange={(event, date) => this.handleDate(event, date)}
        />
        <TimePicker
          hintText="Select start time here"
          onChange={(event, time) => this.handleTime(event, time, true)}
        />
        <TimePicker
          hintText="Select end time here"
          onChange={(event, time) => this.handleTime(event, time, false)}
        />
        <Button onClick={() => this.handleSave()}>Save Window</Button>
      </Segment>
    );
  }
}

function mapStateToProps({ date, selectedWindow, auth }) {
  return { date, selectedWindow, auth };
}

export default connect(mapStateToProps, actions)(WindowSelector);
