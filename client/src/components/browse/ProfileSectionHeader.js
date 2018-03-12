import React, { Component } from 'react';
import { Card, Segment, Grid, Header, Icon, Divider } from 'semantic-ui-react';

class ProfileSectionHeader extends Component {
  render() {
    return (
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={1}>
            <Header as="h3" icon>
              <Icon name={this.props.icon} />
            </Header>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h2">
              {this.props.title}
              <Header.Subheader>{this.props.subtitle}</Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ProfileSectionHeader;
