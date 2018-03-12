//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DashboardNavigator from './DashboardNavigator';
import {
  Segment,
  Grid,
  Header,
  Item,
  Divider,
  Button,
  Icon
} from 'semantic-ui-react';
import DashboardHeader from './DashboardHeader';
import ServiceItem from './ServiceItem';
class SelectServices extends Component {
  handleSave() {
    this.props.saveServices(this.props.application);
    this.props.clearExpertise();
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <DashboardHeader
          header="Select Services"
          title="Choose the services that you would like to provide"
          subtitle="Choose as all that apply"
          icon="signup"
        />
        <Grid stackable container>
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
            </Grid.Column>
          </Grid.Row>
          <DashboardNavigator
            prev="/dashboard/sensei/schedule"
            next="/dashboard/sensei/expertise"
            handleNext={() => {
              console.log('called');
              this.props.saveServices(this.props.application);
              this.props.clearExpertise();
            }}
          />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(SelectServices);
