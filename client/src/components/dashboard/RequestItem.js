//import _ from 'lodash';
import React, { Component } from 'react';
import { Button, Item, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import moment from 'moment';

class RequestItem extends Component {
  componentDidMount() {
    //console.log(this.props.application);
  }

  renderButtons() {
    return (
      <Button.Group>
        <Button
          onClick={() =>
            this.props.acceptRequest({
              requestId: this.props.id
            })}
        >
          Accept
        </Button>
        <Button
          onClick={() =>
            this.props.denyRequest({
              requestId: this.props.id
            })}
        >
          Deny
        </Button>
      </Button.Group>
    );
  }

  render() {
    return (
      <Item>
        <Item.Image size="tiny" src={this.props.pic} />
        <Item.Content>
          <Header>
            <Header.Subheader>Request for appointment on</Header.Subheader>
            {moment(this.props.date).format('dddd, MMMM Do YYYY')}
          </Header>
          <div>
            <Header>
              <Header.Subheader>Starting at</Header.Subheader>
              {moment(this.props.time).format('h:mm A')}
            </Header>
          </div>

          <Header>
            <Header.Subheader>From</Header.Subheader>
            {this.props.from}
          </Header>
          <Item.Description>"{this.props.note}"</Item.Description>
          <Item.Extra>{this.renderButtons()}</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ requests }) {
  return { requests };
}

export default connect(mapStateToProps, actions)(RequestItem);
