//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './MenuItem.css';

class MenuItem extends Component {
  state = { stateSelected: false };

  renderUserMenuItem() {
    return (
      <div id="loginMenuItemContainer">
        <p>Menu Item</p>
      </div>
    );
  }

  handleClick() {
    if (this.state.stateSelected) {
      console.log('called');
      this.setState({ stateSelected: false });
    } else {
      console.log('called');
      this.setState({ stateSelected: true });
    }
  }

  renderSideMenuItem() {
    const selected = this.props.selected;
    if (!this.state.stateSelected) {
      return (
        <div onClick={() => this.handleClick()} id="sideMenuItemContainer">
          <i id="genericIcon" className="fa fa-user fa-lg" />
          <p id="sideMenuItemText">Menu Item</p>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => this.handleClick()}
          id="selectedSideMenuItemContainer"
        >
          <i id="selectedGenericIcon" className="fa fa-user fa-lg" />
          <p id="selectedSideMenuItemText">Menu Item</p>
        </div>
      );
    }
  }

  renderMenuItem() {
    switch (this.props.type) {
      case 'user':
        return this.renderUserMenuItem();
      case 'side':
        return this.renderSideMenuItem();
      default:
        return this.renderUserMenuItem();
    }
  }
  render() {
    return <div>{this.renderMenuItem()}</div>;
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(MenuItem);
