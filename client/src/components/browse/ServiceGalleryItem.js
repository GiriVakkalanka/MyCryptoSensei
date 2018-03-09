//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';

class ServiceGalleryItem extends Component {
  render() {
    return (
      <div>
        <Header as="h3" icon>
          <Icon color="yellow" bordered circular name={this.props.icon} />
          <Header.Content>{this.props.service}</Header.Content>
        </Header>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ServiceGalleryItem);
