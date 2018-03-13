import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Item } from 'semantic-ui-react';
import DashboardHeader from './DashboardHeader';
import DashboardNavigator from './DashboardNavigator';
import SessionItem from './SessionItem';

class Requests extends Component {
  renderSessions() {
    return _.map(this.props.sessions.acceptedSessions, session => {
      return (
        <SessionItem
          key={session._id}
          id={session._id}
          requestId={session._request}
          client={session.client.fullName}
          expert={session.expert.fullName}
          date={session.dateStarted}
          time={session.timeStarted}
          service={session.service}
        />
      );
    });
  }
  render() {
    return (
      <Grid container stackable>
        <DashboardHeader
          header="Sessions"
          title="These are your ongoing, upcoming, and past sessions"
          subtitle="Expired sessions have chat functionality for 24 hrs after session ends"
          icon="hourglass end"
        />
        <Grid.Row>
          <Grid.Column width={12}>
            <Segment>
              <Item.Group divided>{this.renderSessions()}</Item.Group>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ sessions }) {
  return { sessions };
}

export default connect(mapStateToProps, actions)(Requests);
