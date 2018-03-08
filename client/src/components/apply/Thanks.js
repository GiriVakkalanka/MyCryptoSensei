//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';

class Thanks extends Component {
  componentDidMount() {
    this.props.submitApplication({
      services: this.props.application,
      links: this.props.links
    });
    this.props.clearExpertise();
  }
  render() {
    return (
      <div>
        <h1>Generic Component</h1>
      </div>
    );
  }
}

function mapStateToProps({ application, links }) {
  return { application, links };
}

export default connect(mapStateToProps, actions)(Thanks);
