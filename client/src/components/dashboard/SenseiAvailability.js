//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid, Header, Icon, Divider } from 'semantic-ui-react';
import WindowSelector from './WindowSelector';
import WindowList from './WindowList';
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
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h1" icon>
              <Icon name="calendar" />
              <Header.Content>Add windows of availability</Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={5}>
            <WindowSelector />
          </Grid.Column>
          <Grid.Column width={8}>
            <WindowList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(SenseiAvailability);
