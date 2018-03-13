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
import ServicesOffered from './ServicesOffered';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class ProfilePage extends Component {
  componentDidMount() {
    console.log(this.props.senseiPage);
  }
  renderLinks() {
    return (
      <div>
        <a
          href={
            this.props.senseiPage.links
              ? this.props.senseiPage.links['linkOne']
              : ''
          }
        >
          <Icon
            color="yellow"
            fitted
            style={{ marginTop: 5 }}
            size="large"
            name="chain"
          />
        </a>
        <a
          href={
            this.props.senseiPage.links
              ? this.props.senseiPage.links['linkTwo']
              : ''
          }
        >
          <Icon
            color="yellow"
            fitted
            style={{ marginTop: 5 }}
            size="large"
            name="chain"
          />
        </a>
        <a
          href={
            this.props.senseiPage.links
              ? this.props.senseiPage.links['linkThree']
              : ''
          }
        >
          <Icon
            color="yellow"
            fitted
            style={{ marginTop: 5 }}
            size="large"
            name="chain"
          />
        </a>
      </div>
    );
  }

  render() {
    return (
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              size="tiny bordered rounded"
              src={this.props.senseiPage.pic}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header size="huge" as="h1">
              {this.props.senseiPage.fullName}
              <Header.Subheader>
                {this.props.senseiPage.city}, {this.props.senseiPage.country}
              </Header.Subheader>
              <Header.Subheader>
                <div style={styles.wrapper}>{this.renderLinks()}</div>
              </Header.Subheader>
            </Header>
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
            <ServicesOffered />
          </Grid.Column>
        </Grid.Row>
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
