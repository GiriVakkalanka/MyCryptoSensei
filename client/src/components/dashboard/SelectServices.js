//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Segment,
  Grid,
  Header,
  Item,
  Divider,
  Button,
  Icon
} from 'semantic-ui-react';
import ServiceItem from './ServiceItem';
class SelectServices extends Component {
  handleSave() {
    this.props.saveServices(this.props.application);
    this.props.clearExpertise();
    this.props.history.push('/');
  }
  render() {
    return (
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h1" icon>
              <Icon name="calendar" />
              <Header.Content>
                Select the services that you would like to provide
              </Header.Content>
              <Header.Subheader floated="left">
                Choose all that apply
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={9}>
            <Segment>
              <Item.Group divided>
                <ServiceItem
                  header="Business Analysis"
                  icon="line chart"
                  description="Help clients evaluate the business case and valuation of a coin"
                />
                <ServiceItem
                  header="Whitepaper Analysis"
                  icon="code"
                  description="Help clients understand the technical foundations of a coin."
                />
                <ServiceItem
                  header="Tax Consultation"
                  icon="calculator"
                  description="Advise users on the tax considerations of crypto investing."
                />
                <ServiceItem
                  header="Onboarding Guidance"
                  icon="btc"
                  description="Guide users through wallet setup, getting to cold storage, etc."
                />
              </Item.Group>
            </Segment>
            <Button onClick={() => this.handleSave()}>Save</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(SelectServices);
