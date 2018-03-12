//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Segment,
  Grid,
  Header,
  Icon,
  Button,
  Divider
} from 'semantic-ui-react';

class Login extends Component {
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column width={9}>
            <Header as="h2">
              Log in with any service to submit the application.
              <Header.Subheader>Choose a service to finish.</Header.Subheader>
            </Header>
            <Segment>
              <Grid.Row>
                <Button href="/auth/facebook" fluid color="facebook">
                  <Icon name="facebook" /> Facebook
                </Button>
              </Grid.Row>
              <Divider horizontal>Or</Divider>
              <Grid.Row>
                <Button href="/auth/google" fluid color="google plus">
                  <Icon name="google plus" /> Google
                </Button>
              </Grid.Row>
              <Divider horizontal>Or</Divider>
              <Grid.Row>
                <Button href="/auth/linkedin" fluid color="linkedin">
                  <Icon name="linkedin" /> LinkedIn
                </Button>
              </Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Login);
