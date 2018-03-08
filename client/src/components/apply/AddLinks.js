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
  Form,
  Divider,
  Input
} from 'semantic-ui-react';

class AddLinks extends Component {
  handleChange(e, key) {
    switch (key) {
      case 1:
        return this.props.changeLinkOne({ linkOne: e.target.value });
      case 2:
        return this.props.changeLinkTwo({ linkTwo: e.target.value });
      case 3:
        return this.props.changeLinkThree({ linkThree: e.target.value });
    }
  }
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column width={9}>
            <Header as="h2">
              Select the services that you would like to provide.
              <Header.Subheader>Choose all that apply</Header.Subheader>
            </Header>
            <Segment>
              <Form>
                <Form.Field>
                  <label>Link one</label>
                  <Input
                    icon="chain"
                    iconPosition="left"
                    placeholder="Add in any link. GitHub, LinkedIn, Personal page, etc."
                    onChange={e => this.handleChange(e, 1)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Link two</label>
                  <Input
                    placeholder="Add in any link. GitHub, LinkedIn, Personal page, etc."
                    icon="chain"
                    iconPosition="left"
                    onChange={e => this.handleChange(e, 2)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Link three</label>
                  <Input
                    placeholder="Add in any link. GitHub, LinkedIn, Personal page, etc."
                    icon="chain"
                    iconPosition="left"
                    onChange={e => this.handleChange(e, 3)}
                  />
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Divider />
      </Grid>
    );
  }
}

function mapStateToProps({ application, links }) {
  return { application, links };
}

export default connect(mapStateToProps, actions)(AddLinks);
