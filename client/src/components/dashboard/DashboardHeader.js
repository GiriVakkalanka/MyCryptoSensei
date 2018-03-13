import React, { Component } from 'react';
import { Grid, Header, Icon, Divider } from 'semantic-ui-react';

class DashboardHeader extends Component {
  render() {
    return (
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" icon>
              <Icon name={this.props.icon} />
              <Header.Content>{this.props.header}</Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
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

export default DashboardHeader;
