import React, { Component } from 'react';
import { Icon, Header, Button, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ServiceItem extends Component {
  componentDidMount() {
    console.log(this.props.application);
  }
  renderButton(expertise) {
    if (this.props.application.includes(expertise)) {
      return (
        <Button
          floated="right"
          style={{ marginTop: 10 }}
          onClick={() => {
            this.handleClick(expertise);
          }}
        >
          Deselect
        </Button>
      );
    }
    return (
      <Button
        floated="right"
        style={{ marginTop: 10 }}
        onClick={() => {
          this.handleClick(expertise);
        }}
      >
        Select
      </Button>
    );
  }

  handleClick(expertise) {
    if (this.props.application.includes(expertise)) {
      this.props.removeExpertise(expertise);
    } else {
      this.props.addExpertise(expertise);
    }
  }

  render() {
    return (
      <Item>
        <Item.Image>
          <Header as="h1" icon>
            <Icon name={this.props.icon} />
          </Header>
        </Item.Image>
        <Item.Content>
          <Item.Header>{this.props.header}</Item.Header>
          <Item.Description>{this.props.description}</Item.Description>
          <Item.Extra>{this.renderButton(this.props.header)}</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ServiceItem);
