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
  Button,
  Divider
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DashboardNavigator extends Component {
  handleClick() {
    this.props.handleNext();
  }
  render() {
    return (
      <div>
        <Divider />
        <Grid.Row>
          <Grid.Column width={4}>
            <Button as={Link} to={this.props.prev} floated="left">
              Back
            </Button>

            <Button
              onClick={() => this.handleClick()}
              as={Link}
              to={this.props.next}
              floated="right"
            >
              Next
            </Button>
          </Grid.Column>
        </Grid.Row>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(DashboardNavigator);
