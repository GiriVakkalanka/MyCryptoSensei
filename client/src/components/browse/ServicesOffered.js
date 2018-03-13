import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Divider } from 'semantic-ui-react';
import ProfileSectionHeader from './ProfileSectionHeader';
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

class ServicesOffered extends Component {
  renderServiceIcons() {
    return _.map(this.props.senseiPage.services, service => {
      switch (service) {
        case 'Whitepaper Analysis':
          return (
            <Grid.Column key={service} width={3}>
              <Header style={{ marginRight: 15 }} as="h5" icon>
                <Icon name="terminal" />
                <Header.Content>Whitepaper Analysis</Header.Content>
              </Header>
            </Grid.Column>
          );
        case 'Business Analysis':
          return (
            <Grid.Column key={service} width={3}>
              <Header as="h5" icon>
                <Icon name="line chart" />
                <Header.Content>Business Analysis</Header.Content>
              </Header>
            </Grid.Column>
          );
        case 'Tax Consultation':
          return (
            <Grid.Column key={service} width={3}>
              <Header as="h5" icon>
                <Icon name="calculator" />
                <Header.Content>Tax Consultation</Header.Content>
              </Header>
            </Grid.Column>
          );
        case 'Onboarding Guidance':
          return (
            <Grid.Column key={service} width={3}>
              <Header as="h5" icon>
                <Icon name="bitcoin" />
                <Header.Content>Beginner Onboarding</Header.Content>
              </Header>
            </Grid.Column>
          );
        default:
          return;
      }
    });
  }
  renderExpertiseChips() {
    return _.map(this.props.senseiPage.specialization, expertise => {
      return (
        <Grid.Column key={expertise} width={1}>
          <Chip style={styles.chip} key={expertise}>
            {expertise}
          </Chip>
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <div>
        <ProfileSectionHeader
          title="Services"
          subtitle="Sensei offers the following services with expertise in the following areas:"
          icon="info circle"
        />

        <Grid stackable container>
          <Grid.Row>{this.renderServiceIcons()}</Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header>
                Expertise
                <div style={styles.wrapper}>{this.renderExpertiseChips()}</div>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider />
      </div>
    );
  }
}

function mapStateToProps({ senseiPage }) {
  return { senseiPage };
}

export default connect(mapStateToProps, actions)(ServicesOffered);
