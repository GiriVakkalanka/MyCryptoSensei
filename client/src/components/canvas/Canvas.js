//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Canvas.css';
import Button from '../interface/button/Button';
import MenuItem from '../interface/menuItem/MenuItem';
import Menu from '../interface/menuItem/Menu';

class Canvas extends Component {
  render() {
    return (
      <div id="canvasContainer">
        <div className="testContainer">
          <div id="testCard">
            <Menu />
            <MenuItem selected type="side" />
            <MenuItem type="side" />
            <MenuItem selected type="side" />
            <MenuItem type="side" />
          </div>
          <div id="testButton">
            <Button
              type="link"
              to="/"
              label="SUBMIT"
              onClick={() => console.log('lol')}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Canvas);
