//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid } from 'semantic-ui-react';
import WindowSelector from './WindowSelector';
import WindowList from './WindowList';
import DashboardHeader from './DashboardHeader';
import DashboardNavigator from './DashboardNavigator';
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
    return (
      <div>
        <DashboardHeader
          header="Add Availability"
          title="A window has a start and end time in a day"
          subtitle="Choose as many windows in as many days as you would like"
          icon="calendar"
        />
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column width={5}>
              <WindowSelector />
            </Grid.Column>
            <Grid.Column width={8}>
              <WindowList />
            </Grid.Column>
          </Grid.Row>

          <DashboardNavigator
            prev="/dashboard/sensei/sessions"
            next="/dashboard/sensei/services"
          />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(SenseiAvailability);
