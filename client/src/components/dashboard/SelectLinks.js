//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Segment,
  Grid,
  Header,
  Form,
  Input,
  Divider,
  Button
} from 'semantic-ui-react';

class SelectLinks extends Component {
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
        <Grid.Row>
          <Grid.Column width={9}>
            <Header as="h2">
              What do you do?
              <Header.Subheader>
                Add any three links that best describe your work.
              </Header.Subheader>
            </Header>
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
            <Button onClick={() => this.handleClick()}>Save</Button>
          </Grid.Column>
        </Grid.Row>
        <Divider />
      </Grid>
    );
  }
}

function mapStateToProps({ application, links, auth }) {
  return { application, links, auth };
}

export default connect(mapStateToProps, actions)(SelectLinks);
