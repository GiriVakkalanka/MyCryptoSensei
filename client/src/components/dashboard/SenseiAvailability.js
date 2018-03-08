//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Input } from 'semantic-ui-react';
import WindowSelector from './WindowSelector';
//import DatePicker from 'react-datepicker';
//import moment from 'moment';
//import 'react-datepicker/dist/react-datepicker.css';
//import DatePicker from 'material-ui/DatePicker';
//import TimePicker from 'material-ui/TimePicker';

class SenseiAvailability extends Component {
  handleChange(date) {
    var dateObj = new Date(date);
    console.log(dateObj);
    this.setState({
      startDate: date
    });
  }
  render() {
    return <WindowSelector />;
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(SenseiAvailability);
