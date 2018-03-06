import _ from 'lodash';
import React, { Component } from 'react';
import {
  Card,
  Segment,
  Grid,
  Header,
  Icon,
  Rail,
  Sticky,
  Divider
} from 'semantic-ui-react';
import SelectServices from './SelectServices';
import ApplySteps from './ApplySteps';
import ServiceItem from './ServiceItem';

class Apply extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    //console.log(event.srcElement.body.scrollHeight);
    //console.log(window.pageYOffset);
  }
  handleContextRef = contextRef => this.setState({ contextRef });
  render() {
    const { contextRef } = this.state;
    return (
      <div>
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h1" icon>
                <Icon name="dollar" />
                <Header.Content>Apply to be a Sensei</Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <SelectServices />
        </Grid>
      </div>
    );
  }
}

export default Apply;
