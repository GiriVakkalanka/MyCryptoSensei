//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';
import DashboardHeader from '../dashboard/DashboardHeader';
import SubmitPayment from './SubmitPayment';
import SubmitReview from './SubmitReview';
import moment from 'moment';
import LeaveReview from './LeaveReview';
class SessionPage extends Component {
  renderPage() {
    if (!this.props.sessionPage.paid) {
      return (
        <div>
          <DashboardHeader
            header="Session Page"
            title="Submit payment to open the session page"
            subtitle="Payment activates session and allows sensei and client to coordinate via chat "
            icon="hourglass end"
          />

          <Grid stackable container>
            <Grid.Row>
              <Grid.Column width={10}>
                <Header>
                  Hour long {this.props.sessionPage.service} session between{' '}
                  {this.props.sessionPage.client.fullName} and{' '}
                  {this.props.sessionPage.expert.fullName} on{' '}
                  {moment(this.props.sessionPage.dateStarted).format(
                    'dddd, MMMM Do YYYY'
                  )}{' '}
                  at{' '}
                  {moment(this.props.sessionPage.timeStarted).format(
                    'h:mm A'
                  )}{' '}
                  for ${this.props.sessionPage.rate}
                </Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <SubmitPayment />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    } else {
      const headerText = moment(this.props.sessionPage.timeStarted).fromNow();
      return (
        <div>
          <DashboardHeader
            header="Session Page"
            title={`Session ran ${headerText}`}
            subtitle="Chat here to coordinate logistics. Chat expires 24 hours after completion. Please leave review here"
            icon="hourglass end"
          />

          <Grid stackable container>
            <Grid.Row>
              <Grid.Column width={14}>
                <LeaveReview />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderPage()}</div>;
  }
}

function mapStateToProps({ sessionPage, auth }) {
  return { sessionPage, auth };
}

export default connect(mapStateToProps, actions)(SessionPage);
