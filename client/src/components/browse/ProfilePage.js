//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';

class ProfilePage extends Component {
  componentDidMount() {
    console.log(this.props.senseiPage);
  }
  render() {
    return (
      <div>
        <h1>Generic Component</h1>
      </div>
    );
  }
}

function mapStateToProps({ senseiPage }) {
  return { senseiPage };
}

export default connect(mapStateToProps, actions)(ProfilePage);
