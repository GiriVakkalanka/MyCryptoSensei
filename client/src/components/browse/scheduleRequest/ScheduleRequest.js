//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Grid } from 'semantic-ui-react';

import RequestWindowList from './RequestWindowList';
import RequestTimeSelector from './RequestTimeSelector';
import './ScheduleRequest.css';

class ScheduleRequest extends Component {
  render() {
    return (
      <div id="scheduleRequest">
        <div id="scheduleRequestWindowList">
          <RequestWindowList />
        </div>
        <div id="scheduleRequestTimeSelector">
          <RequestTimeSelector />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ScheduleRequest);
