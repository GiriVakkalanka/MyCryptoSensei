//import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Header, Icon, Divider } from 'semantic-ui-react';
import SelectServices from './SelectServices';
//import ApplySteps from './ApplySteps';
//import ServiceItem from './ServiceItem';
import Login from './Login';
import AddLinks from './AddLinks';

class Apply extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    //console.log(event.srcElement.body.scrollHeight);
    //console.log(window.pageYOffset);
  }

  render() {
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
          <AddLinks />
          <Login />
        </Grid>
      </div>
    );
  }
}

export default Apply;
