//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Button } from 'semantic-ui-react';
import StripeCheckout from 'react-stripe-checkout';

class SubmitPayment extends Component {
  handleClick() {
    this.props.activateSession({ sessionId: this.props.sessionPage._id });
  }
  render() {
    const rate = parseInt(this.props.sessionPage.rate, 10);
    return (
      <StripeCheckout
        name="Boilerplate"
        description="Sensei Payment"
        amount={rate}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button onClick={() => this.handleClick()}>Pay Sensei</Button>
      </StripeCheckout>
    );
  }
}

function mapStateToProps({ sessionPage }) {
  return { sessionPage };
}

export default connect(mapStateToProps, actions)(SubmitPayment);
