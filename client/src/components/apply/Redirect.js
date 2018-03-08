//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';

class Redirect extends Component {
  componentDidMount() {
    console.log(this.props.application);
    console.log(this.props.links);
    if (this.props.application.length > 0) {
      this.props.history.push('/apply');
    } else {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        <h1>Generic Component</h1>
      </div>
    );
  }
}

function mapStateToProps({ auth, application, links }) {
  return { auth, application, links };
}

export default connect(mapStateToProps, actions)(Redirect);
