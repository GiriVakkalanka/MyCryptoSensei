import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Segment,
  Grid,
  Header,
  Icon,
  Image,
  Statistic,
  Button
} from 'semantic-ui-react';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router-dom';

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
  handleClick() {
    const senseiId = this.props.id;
    const info = { key: senseiId };
    this.props.getSenseiPage(info);
  }
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
  renderLinks() {
    return (
      <div>
        <a href={this.props.links ? this.props.links[0] : ''}>
          <Icon
            color="yellow"
            fitted
            style={{ marginTop: 5 }}
            size="big"
            name="chain"
          />
        </a>
        <a href={this.props.links ? this.props.links[1] : ''}>
          <Icon
            color="yellow"
            fitted
            style={{ marginTop: 5 }}
            size="big"
            name="chain"
          />
        </a>
        <a href={this.props.links ? this.props.links[2] : ''}>
          <Icon
            color="yellow"
            fitted
            style={{ marginTop: 5 }}
            size="big"
            name="chain"
          />
        </a>

        <Button
          as={Link}
          to={`/sensei/${this.props.id}`}
          color="yellow"
          floated="right"
          onClick={() => this.handleClick()}
        >
          <div style={{ color: 'black' }}>See availability</div>
        </Button>
      </div>
    );
  }
  render() {
    return (
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
            <h5>Services offered</h5>
          </Grid.Column>
          <div style={styles.wrapper}>{this.renderServiceChips()}</div>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h5>Specialization</h5>
          </Grid.Column>
          <div style={styles.wrapper}>{this.renderSpecializationChips()}</div>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h5>Links</h5>
          </Grid.Column>
          <div>{this.renderLinks()}</div>
        </Grid.Row>
      </Segment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(HitComponent);
