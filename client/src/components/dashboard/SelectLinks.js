//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import {
  Segment,
  Grid,
  Header,
  Form,
  Input,
  Divider,
  Button
} from 'semantic-ui-react';
import DashboardHeader from './DashboardHeader';
import DashboardNavigator from './DashboardNavigator';

class SelectLinks extends Component {
  componentDidMount() {
    console.log('being called');
  }
  handleClick() {
    this.props.saveLinks(this.props.links);
    this.props.history.push('/');
  }
  handleChange(e, key) {
    switch (key) {
      case 1:
        return this.props.changeLinkOne({ linkOne: e.target.value });
      case 2:
        return this.props.changeLinkTwo({ linkTwo: e.target.value });
      case 3:
        return this.props.changeLinkThree({ linkThree: e.target.value });
      default:
        return;
    }
  }
  render() {
    return (
      <Grid container>
        <DashboardHeader
          header="Add Links"
          title="What do you do?"
          subtitle="Add any three links that best describe your work"
          icon="suitcase"
        />
        <Grid.Row>
          <Grid.Column width={9}>
            <Segment>
              <Form>
                <Form.Field>
                  <label>Link one</label>
                  <Input
                    icon="chain"
                    iconPosition="left"
                    placeholder="Add in any link. GitHub, LinkedIn, Personal page, etc."
                    defaultValue={
                      this.props.auth ? this.props.auth.links.linkOne : ''
                    }
                    onChange={e => this.handleChange(e, 1)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Link two</label>
                  <Input
                    placeholder="Add in any link. GitHub, LinkedIn, Personal page, etc."
                    icon="chain"
                    iconPosition="left"
                    defaultValue={
                      this.props.auth && this.props.auth.links
                        ? this.props.auth.links.linkTwo
                        : ''
                    }
                    onChange={e => this.handleChange(e, 2)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Link three</label>
                  <Input
                    placeholder="Add in any link. GitHub, LinkedIn, Personal page, etc."
                    icon="chain"
                    iconPosition="left"
                    defaultValue={
                      this.props.auth && this.props.auth.links
                        ? this.props.auth.links.linkThree
                        : ''
                    }
                    onChange={e => this.handleChange(e, 3)}
                  />
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <DashboardNavigator
          prev="/dashboard/sensei/info"
          next="/"
          handleNext={() => {
            this.props.saveLinks(this.props.links);
          }}
        />
      </Grid>
    );
  }
}

function mapStateToProps({ application, links, auth }) {
  return { application, links, auth };
}

export default connect(mapStateToProps, actions)(withRouter(SelectLinks));
