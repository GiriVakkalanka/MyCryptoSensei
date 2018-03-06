import React, { Component } from 'react';
import {
  Card,
  Segment,
  Grid,
  Checkbox,
  Accordion,
  Icon,
  Header,
  Button,
  Item
} from 'semantic-ui-react';

class ServiceItem extends Component {
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

          <Button style={{ marginTop: 10 }}>Select</Button>
        </Item.Content>
      </Item>
    );
  }
}

export default ServiceItem;
