import React, { Component } from 'react';
import {
  Card,
  Segment,
  Grid,
  Checkbox,
  Accordion,
  Icon
} from 'semantic-ui-react';

class ServiceItem extends Component {
  state = { activeIndex: false };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Grid.Row>
        <Checkbox />

        <Grid.Column width={4}>
          <Accordion styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Whitepaper analysis
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                Help users understand the technical foundations of any given
                coin.
              </p>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default ServiceItem;
