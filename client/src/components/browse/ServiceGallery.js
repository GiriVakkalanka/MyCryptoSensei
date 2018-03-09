//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';
import ServiceGalleryItem from './ServiceGalleryItem';

class ServiceGallery extends Component {
  render() {
    return (
      <Segment.Group horizontal>
        <Segment padded>
          <ServiceGalleryItem icon="line chart" service="Business Evaluation" />
        </Segment>
        <Segment padded>
          <ServiceGalleryItem icon="code" service="Whitepaper Analysis" />
        </Segment>
        <Segment padded>
          <ServiceGalleryItem icon="calculator" service="Tax Consideration" />
        </Segment>
        <Segment padded>
          <ServiceGalleryItem
            icon="thumbs outline up"
            service="Beginner Onboarding"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ServiceGallery);
