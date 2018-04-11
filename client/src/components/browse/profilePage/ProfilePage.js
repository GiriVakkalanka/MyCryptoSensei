//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Grid, Icon, Image, Divider } from 'semantic-ui-react';
import ScheduleRequest from '../ScheduleRequest';
//import ProfileSectionHeader from './ProfileSectionHeader';
import ServicesOffered from '../ServicesOffered';
import './ProfilePage.css';
import PageHeader from '../../interface/pageHeader/PageHeader';
import Header from '../../interface/header/Header';
import ProfileCard from '../../interface/profileCard/ProfileCard';
//import MakeRequest from './MakeRequest';
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
      <div id="profilePageContainer">
        <div id="profilePageHeader">
          <PageHeader page="Sensei" />
        </div>
        <div id="profilePageProfileCard">
          <ProfileCard
            fullName={this.props.senseiPage.fullName}
            city={this.props.senseiPage.city}
            country={this.props.senseiPage.country}
            description={this.props.senseiPage.description}
            pic={this.props.senseiPage.pic}
            links={this.props.senseiPage.links}
            services={this.props.senseiPage.services}
            specialization={this.props.senseiPage.specialization}
            rate={this.props.senseiPage.rate}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ senseiPage }) {
  return { senseiPage };
}

export default connect(mapStateToProps, actions)(ProfilePage);
