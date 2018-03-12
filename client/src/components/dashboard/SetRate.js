//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DashboardHeader from './DashboardHeader';
import DashboardNavigator from './DashboardNavigator';
import {
  Segment,
  Grid,
  Header,
  Form,
  Input,
  Button,
  Divider,
  Label
} from 'semantic-ui-react';

class SetRate extends Component {
  handleClick() {
    this.props.saveRate(this.props.rate);
  }
  handleChange(e, key) {
    this.props.changeRate({ rate: e.target.value });
  }
  render() {
    return (
      <div>
        <DashboardHeader
          header="Set Rate"
          title="Set your hourly rate."
          subtitle="Your time is precious"
          icon="dollar"
        />
        <Grid container>
          <Grid.Row>
            <Segment>
              <Grid.Column width={4}>
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
          <DashboardNavigator
            prev="/dashboard/sensei/expertise"
            next="/dashboard/sensei/info"
            handleNext={() => {
              this.props.saveRate(this.props.rate);
            }}
          />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ application, rate }) {
  return { application, rate };
}

export default connect(mapStateToProps, actions)(SetRate);
