import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './MenuItem.css';

class Menu extends Component {
  render() {
    return <div>test</div>;
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Menu);
