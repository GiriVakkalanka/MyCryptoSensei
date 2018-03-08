//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
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
    return (
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h1" icon>
              <Icon name="dollar" />
              <Header.Content>Apply to be a Sensei</Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <WindowSelector />
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(SenseiAvailability);
