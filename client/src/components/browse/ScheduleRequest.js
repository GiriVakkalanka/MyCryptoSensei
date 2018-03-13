//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid } from 'semantic-ui-react';

import ProfileSectionHeader from './ProfileSectionHeader';
import RequestWindowList from './RequestWindowList';
import RequestTimeSelector from './RequestTimeSelector';

class ScheduleRequest extends Component {
  render() {
    return (
      <div>
        <ProfileSectionHeader
          title="Availability"
          subtitle="Choose a time in the available windows to make an appointment reqest to the sensei."
          icon="calendar"
        />
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column width={7}>
              <RequestWindowList />
            </Grid.Column>
            <Grid.Column width={4}>
              <RequestTimeSelector />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ScheduleRequest);
