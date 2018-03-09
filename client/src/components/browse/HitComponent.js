import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Card,
  Segment,
  Grid,
  Header,
  Icon,
  Item,
  Image,
  Divider,
  Statistic,
  Button
} from 'semantic-ui-react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class HitComponent extends Component {
  renderServiceChips() {
    return _.map(this.props.expertise, expertise => {
      return (
        <Chip style={styles.chip} key={expertise}>
          {expertise}
        </Chip>
      );
    });
  }
  renderSpecializationChips() {
    return _.map(this.props.specialization, specialization => {
      return (
        <Chip style={styles.chip} key={specialization}>
          {specialization}
        </Chip>
      );
    });
  }
  render() {
    return (
      <Grid>
        <Segment>
          <Grid.Row>
            <Grid.Column>
              <Image floated="left" src={this.props.pic} rounded />
            </Grid.Column>
            <Grid.Column>
              <Header>{this.props.name}</Header>
              <Header.Subheader>
                {this.props.city}, {this.props.country}
              </Header.Subheader>
            </Grid.Column>

            <Statistic floated="right">
              <Statistic.Value>
                $
                {this.props.rate}
              </Statistic.Value>
              <Statistic.Label>USD/Hour</Statistic.Label>
            </Statistic>
          </Grid.Row>

          <Header as="h4">{this.props.desc}</Header>
          <Grid.Row>
            <Grid.Column>
              <h5>Services offered:</h5>
            </Grid.Column>
            <div style={styles.wrapper}>{this.renderServiceChips()}</div>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h5>Specialization:</h5>
            </Grid.Column>
            <div style={styles.wrapper}>{this.renderSpecializationChips()}</div>

            <Button floated="right">See Availability</Button>
          </Grid.Row>
        </Segment>
      </Grid>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(HitComponent);
