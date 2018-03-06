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
  Checkbox
} from 'semantic-ui-react';
import ServiceItem from './ServiceItem';
class SelectServices extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Grid container>
        <ServiceItem
          service="Whitepaper analysis"
          description="Help users understand the technical foundations of a requested coin"
        />

        <ServiceItem
          service="Business analysis"
          description="Help users evaluate the business case of a requested coin"
        />
        <ServiceItem
          service="Tax analysis"
          description="Advise users on the tax considerations related to crypto investing"
        />
        <ServiceItem
          service="Onboarding guidance"
          description="Guide users through wallet setup, getting to cold storage, etc."
        />
      </Grid>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SelectServices);
