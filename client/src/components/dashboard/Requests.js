import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Item } from 'semantic-ui-react';
import DashboardHeader from './DashboardHeader';
import DashboardNavigator from './DashboardNavigator';
import RequestItem from './RequestItem';

class Requests extends Component {
  renderReceivedRequests() {
    return _.map(this.props.requests.receivedRequests, request => {
      return (
        <RequestItem
          key={request._id}
          id={request._id}
          from={request.clientName}
          pic={request.clientPic}
          date={request.dateRequested}
          time={request.timeRequested}
          service={request.service}
          note={request.note}
        />
      );
    });
  }
  render() {
    return (
      <Grid container stackable>
        <DashboardHeader
          header="Requests"
          title="Your requests for appointments"
          subtitle="Accept a request to open up a session and take payment from the client"
          icon="chain"
        />
        <Grid.Row>
          <Grid.Column width={12}>
            <Segment>
              <Item.Group divided>{this.renderReceivedRequests()}</Item.Group>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ requests }) {
  return { requests };
}

export default connect(mapStateToProps, actions)(Requests);
