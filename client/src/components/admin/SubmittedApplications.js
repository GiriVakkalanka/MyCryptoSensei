import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Segment, Grid, Header, Item, Divider } from 'semantic-ui-react';
import ApplicationItem from './ApplicationItem';

class SubmittedApplications extends Component {
  componentDidMount() {
    this.props.fetchNewApplications();
  }

  renderNewApplications() {
    return _.map(this.props.admin, application => {
      const linkArray = [
        application.links.linkOne,
        application.links.linkTwo,
        application.links.linkThree
      ];
      console.log(application);
      return (
        <ApplicationItem
          key={application.user._id}
          applicationId={application._id}
          userId={application.user._id}
          fullName={application.user.fullName}
          image={application.user.pic}
          links={linkArray}
        />
      );
    });
  }

  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column width={9}>
            <Header as="h2">
              Submitted Sensei Applications
              <Header.Subheader>Accept or Deny</Header.Subheader>
            </Header>
            <Segment>
              <Item.Group divided>{this.renderNewApplications()}</Item.Group>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Divider />
      </Grid>
    );
  }
}

function mapStateToProps({ admin }) {
  return { admin };
}

export default connect(mapStateToProps, actions)(SubmittedApplications);
