import _ from 'lodash';
import React, { Component } from 'react';
import { Button, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ApplicationItem extends Component {
  componentDidMount() {
    //console.log(this.props.application);
  }

  renderButtons() {
    return (
      <Button.Group>
        <Button
          onClick={() =>
            this.props.acceptApplication({
              applicationId: this.props.applicationId,
              userId: this.props.userId
            })}
        >
          Accept
        </Button>
        <Button
          onClick={() =>
            this.props.denyApplication({
              applicationId: this.props.applicationId,
              userId: this.props.userId
            })}
        >
          Deny
        </Button>
      </Button.Group>
    );
  }

  renderLinks() {
    console.log(this.props.links);
    return _.map(this.props.links, url => {
      return <a href={url}>Link </a>;
    });
  }

  render() {
    return (
      <Item>
        <Item.Image size="tiny" src={this.props.image} />
        <Item.Content>
          <Item.Header>{this.props.name}</Item.Header>
          <Item.Description>{this.props.date}</Item.Description>
          <div>{this.renderLinks()}</div>
          <Item.Extra>{this.renderButtons()}</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ApplicationItem);
