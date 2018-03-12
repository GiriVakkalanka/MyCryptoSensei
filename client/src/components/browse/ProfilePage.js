//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Card,
  Segment,
  Grid,
  Header,
  Icon,
  Image,
  Divider
} from 'semantic-ui-react';
import ScheduleRequest from './ScheduleRequest';
import ProfileSectionHeader from './ProfileSectionHeader';

class ProfilePage extends Component {
  componentDidMount() {
    console.log(this.props.senseiPage);
  }
  render() {
    return (
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image
              size="tiny bordered rounded"
              src={this.props.senseiPage.pic}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header size="huge" as="h1">
              {this.props.senseiPage.fullName}
            </Header>
            <p>
              {this.props.senseiPage.city}, {this.props.senseiPage.country}
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h4">{this.props.senseiPage.description}</Header>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <ScheduleRequest />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ senseiPage }) {
  return { senseiPage };
}

export default connect(mapStateToProps, actions)(ProfilePage);
