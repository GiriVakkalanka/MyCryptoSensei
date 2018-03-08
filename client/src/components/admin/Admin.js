//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Divider } from 'semantic-ui-react';
import SubmittedApplications from './SubmittedApplications';

class Admin extends Component {
  render() {
    return (
      <div>
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h1" icon>
                <Icon name="key" />
                <Header.Content>Admin</Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <SubmittedApplications />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Admin);
