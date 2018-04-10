import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Header, Icon, Statistic } from 'semantic-ui-react';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router-dom';
import LinkIcon from '../../../images/Link.png';
import './HitComponent.css';

import Button from '../../interface/button/Button';

const styles = {
  label: {
    fontFamily: 'Rubik, sans-serif',
    fontSize: '16px'
  },
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
        <Chip
          key={expertise}
          style={styles.chip}
          key={expertise}
          backgroundColor="#212121"
          labelColor="#ffea00"
          labelStyle={styles.label}
        >
          {expertise}
        </Chip>
      );
    });
  }
  renderSpecializationChips() {
    return _.map(this.props.specialization, specialization => {
      return (
        <Chip
          style={styles.chip}
          key={specialization}
          backgroundColor="#212121"
          labelColor="#ffea00"
          labelStyle={styles.label}
        >
          {specialization}
        </Chip>
      );
    });
  }
  renderLinks() {
    console.log(this.props.links);
    return (
      <div>
        <a href={this.props.links['linkOne']}>
          <img id="linkIcon" src={LinkIcon} />
        </a>
        <a href={this.props.links['linkTwo']}>
          <img id="linkIcon" src={LinkIcon} />
        </a>
        <a href={this.props.links['linkThree']}>
          <img id="linkIcon" src={LinkIcon} />
        </a>
      </div>
    );
  }
  render() {
    return (
      <div id="hitContainer">
        <div id="pic">
          <img id="picFile" src={this.props.pic} />
        </div>
        <div id="name">
          <p id="nameText">{this.props.name}</p>
          <p id="descriptionText">{this.props.desc}</p>
        </div>
        <div id="location">
          {this.props.city}, {this.props.country}
          <div id="links">
            <div>
              <h5>Links</h5>
            </div>
            <div>{this.renderLinks()}</div>
          </div>
        </div>

        <div id="price">
          <Statistic floated="right">
            <Statistic.Value>
              $
              {this.props.rate}
            </Statistic.Value>
            <Statistic.Label>USD/Hour</Statistic.Label>
          </Statistic>
        </div>

        <div id="serviceChips">
          <div>
            <h5>Services offered</h5>
          </div>
          <div style={styles.wrapper}>{this.renderServiceChips()}</div>
        </div>
        <div id="specializationChips">
          <div>
            <h5>Specialization</h5>
          </div>
          <div style={styles.wrapper}>{this.renderSpecializationChips()}</div>
        </div>

        <div id="seeAvailabilityButton">
          <Button
            type="link"
            to={`/sensei/${this.props.id}`}
            onClick={() => this.handleClick()}
            label="See Availability"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(HitComponent);
