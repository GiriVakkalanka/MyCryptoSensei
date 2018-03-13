//import _ from 'lodash';
import React, { Component } from 'react';
import { Button, Item, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import moment from 'moment';
import { Link } from 'react-router-dom';

class SessionItem extends Component {
  componentDidMount() {
    //console.log(this.props.application);
  }

  renderButtons() {
    return (
      <Button
        floated="right"
        as={Link}
        to={`/session/${this.props.id}`}
        onClick={() => {
          this.props.getSessionPage({ requestId: this.props.requestId });
        }}
      >
        Open Session
      </Button>
    );
  }

  render() {
    return (
      <Item>
        <Item.Image>
          <Header icon>
            <Icon name="hourglass end" />
          </Header>
        </Item.Image>
        <Item.Content>
          <Header>
            <Header.Subheader>Session date</Header.Subheader>
            {moment(this.props.date).format('dddd, MMMM Do YYYY')}
          </Header>
          <div>
            <Header>
              <Header.Subheader>Session time</Header.Subheader>
              {moment(this.props.time).format('h:mm A')}
            </Header>
          </div>

          <Item.Extra>{this.renderButtons()}</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ sessions }) {
  return { sessions };
}

export default connect(mapStateToProps, actions)(SessionItem);
