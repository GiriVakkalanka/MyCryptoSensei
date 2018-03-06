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
  Accordion,
  Checkbox,
  Item
} from 'semantic-ui-react';
import ServiceItem from './ServiceItem';
class SelectServices extends Component {
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SelectServices);
