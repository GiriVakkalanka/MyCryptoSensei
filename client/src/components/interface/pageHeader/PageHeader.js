//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Card, Segment, Grid, Header, Icon } from 'semantic-ui-react';
import './PageHeader.css';

import wallet from '../../../images/Wallet.png';
import whitepaper from '../../../images/WhitepaperAnalysis.png';
import business from '../../../images/Business.png';
import tax from '../../../images/Tax.png';

class PageHeader extends Component {
  renderIcon() {
    switch (this.props.page) {
      case 'Sensei':
        return wallet;
      case 'whitepaper':
        return whitepaper;
      case 'business':
        return business;
      case 'tax':
        return tax;
      default:
        return wallet;
    }
  }

  renderInstructions() {
    switch (this.props.page) {
      case 'Sensei':
        return "Choose an hour from the Sensei's windows of availability to make a schedule request.";
      default:
        return ' ';
    }
  }

  render() {
    return (
      <div>
        <div id="pageHeaderSubContainer">
          <div className="fadeInLeftBig" id="pageHeaderIconDiv">
            <img id="pageHeaderIcon" src={this.renderIcon()} />
          </div>
          <div className="fadeInLeftBig" id="pageHeaderTitleDiv">
            <p id="pageHeaderTitle">{this.props.page}</p>
          </div>
        </div>
        <div className="fadeInLeftBig" id="pageHeaderInstructions">
          <p>{this.renderInstructions()}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(PageHeader);
