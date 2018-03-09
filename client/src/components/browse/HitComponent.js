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
  Item,
  Image,
  Divider
} from 'semantic-ui-react';

class HitComponent extends Component {
  render() {
    return (
      <Grid>
        <Segment>
          <Grid.Column>
            <Image floated="left" src={this.props.pic} rounded />
          </Grid.Column>
          <Grid.Column>
            <Header>{this.props.name}</Header>
            <Header.Subheader>
              {this.props.city}, {this.props.country}
            </Header.Subheader>
          </Grid.Column>
          <Header as="h4">{this.props.desc}</Header>
        </Segment>
      </Grid>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(HitComponent);
