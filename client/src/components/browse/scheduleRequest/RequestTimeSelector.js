//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
//import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { Segment, Header, Modal } from 'semantic-ui-react';
import MakeRequest from './MakeRequest';
import Button from '../../interface/button/Button';
import './RequestTimeSelector.css';

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
      <div id="requestTimeSelectorContainer">
        <p>Request an hour-long session on</p>

        <div>
          <p id="requestDate">
            {moment(this.props.selectedWindow.date).format(
              'dddd, MMMM Do YYYY'
            )}
          </p>
        </div>
        <p>Choose a time between</p>
        <div id="requestDate">
          <p>
            {moment(this.props.selectedWindow.startTime).format('h:mm A')} and{' '}
            {moment(this.props.selectedWindow.endTime).format('h:mm A')}
          </p>
        </div>
        <TimePicker
          hintText="Select time here"
          onChange={(event, time) => this.handleTime(event, time, false)}
          dialogBodyStyle={{ backgroundColor: '#ffea00' }}
          textFieldStyle={{ color: '#212121' }}
        />
        <div>
          <Button
            type="modal"
            label="Request Session"
            content={<MakeRequest />}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ selectedWindow }) {
  return { selectedWindow };
}

export default connect(mapStateToProps, actions)(RequestTimeSelector);
