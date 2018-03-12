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
  Divider
} from 'semantic-ui-react';

class AddInfo extends Component {
  handleClick() {
    this.props.saveInfo(this.props.info);
    this.props.history.push('/');
  }
  handleChange(e, key) {
    switch (key) {
      case 1:
        return this.props.changeCity({ city: e.target.value });
      case 2:
        return this.props.changeCountry({ country: e.target.value });
      case 3:
        return this.props.changeDescription({ description: e.target.value });
      default:
        return;
    }
  }
  render() {
    return (
      <div>
        <DashboardHeader
          header="Add Info"
          title="Basic information"
          subtitle="Tell your potential clients where you are based and what you do."
          icon="suitcase"
        />
        <Grid container>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment>
                <Form>
                  <Form.Group>
                    <Form.Field>
                      <label>City</label>
                      <Input
                        icon="building"
                        iconPosition="left"
                        placeholder="City"
                        defaultValue={
                          this.props.auth && this.props.auth.city
                            ? this.props.auth.city
                            : ''
                        }
                        onChange={e => this.handleChange(e, 1)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Country</label>
                      <Input
                        placeholder="Country"
                        icon="globe"
                        iconPosition="left"
                        defaultValue={
                          this.props.auth && this.props.auth.country
                            ? this.props.auth.country
                            : ''
                        }
                        onChange={e => this.handleChange(e, 2)}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.TextArea
                    onChange={e => this.handleChange(e, 3)}
                    label="Description"
                    placeholder="A 140 character description"
                    defaultValue={
                      this.props.auth && this.props.auth.city
                        ? this.props.auth.description
                        : ''
                    }
                  />
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <DashboardNavigator
            prev="/dashboard/sensei/rate"
            next="/dashboard/sensei/links"
            handleNext={() => {
              this.props.saveInfo(this.props.info);
            }}
          />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ auth, info }) {
  return { auth, info };
}

export default connect(mapStateToProps, actions)(AddInfo);
