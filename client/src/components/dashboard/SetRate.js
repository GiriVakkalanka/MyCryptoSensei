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
  Input,
  Button,
  Divider,
  Label
} from 'semantic-ui-react';

class SetRate extends Component {
  handleClick() {
    this.props.saveRate(this.props.rate);
    this.props.history.push('/');
  }
  handleChange(e, key) {
    this.props.changeRate({ rate: e.target.value });
  }
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Segment>
            <Grid.Column width={4}>
              <Header as="h2">
                Set your hourly rate.
                <Header.Subheader>Your time is precious.</Header.Subheader>
              </Header>

              <Form>
                <Form.Field>
                  <label>Hourly Rate (USD)</label>
                  <Input
                    size="massive"
                    labelPosition="right"
                    type="text"
                    placeholder="Rate"
                    defaultValue={this.props.auth ? this.props.auth.rate : ''}
                    onChange={e => this.handleChange(e, 1)}
                  >
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                  </Input>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Segment>
        </Grid.Row>
        <Button onClick={() => this.handleClick()}>Save</Button>
        <Divider />
      </Grid>
    );
  }
}

function mapStateToProps({ application, rate }) {
  return { application, rate };
}

export default connect(mapStateToProps, actions)(SetRate);
