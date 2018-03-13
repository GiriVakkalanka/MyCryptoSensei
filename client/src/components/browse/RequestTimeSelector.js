//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
//import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { Button, Segment, Header, Modal } from 'semantic-ui-react';
import MakeRequest from './MakeRequest';

import moment from 'moment';

class RequestTimeSelector extends Component {
  componentDidMount() {
    console.log(this.props.selectedWindow);
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

  handleTime(event, time) {
    const pickedTime = new Date(time);

    console.log(pickedTime);
  }

  renderModalButton() {
    return (
      <Modal
        size="small"
        trigger={<Button floated="right">Request session</Button>}
      >
        <Modal.Content>
          <MakeRequest />
        </Modal.Content>
      </Modal>
    );
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
        <Header>
          <Header.Subheader>Request an hour-long session on</Header.Subheader>
          {moment(this.props.selectedWindow.date).format('dddd, MMMM Do YYYY')}
        </Header>
        <Header>
          <Header.Subheader>Any time between</Header.Subheader>
          {moment(this.props.selectedWindow.startTime).format(
            'h:mm A'
          )} and {moment(this.props.selectedWindow.endTime).format('h:mm A')}
        </Header>
        <TimePicker
          hintText="Select time here"
          onChange={(event, time) => this.handleTime(event, time, false)}
        />
        <div>{this.renderModalButton()}</div>
      </Segment>
    );
  }
}

function mapStateToProps({ selectedWindow }) {
  return { selectedWindow };
}

export default connect(mapStateToProps, actions)(RequestTimeSelector);
