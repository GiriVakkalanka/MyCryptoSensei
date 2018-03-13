//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import {
  Card,
  Segment,
  Grid,
  Header,
  Icon,
  Form,
  Rating,
  Button
} from 'semantic-ui-react';

class LeaveReview extends Component {
  handleChange(e, { value }) {
    console.log(value);
  }
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column width={10}>
            <Segment>
              <Form>
                <label>Rating</label>
                <div>
                  <Rating icon="star" defaultRating={3} maxRating={5} />
                </div>
                <Form.TextArea
                  onChange={(e, { value }) => this.handleChange(e, { value })}
                  label="Review"
                  placeholder="Write review here"
                />
              </Form>
            </Segment>
            <Button floated="right" as={Link} to="/">
              Submit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(LeaveReview);
