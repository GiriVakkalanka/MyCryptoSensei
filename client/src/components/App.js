import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
//import Header from './Header';
import NavHeader from './layout/NavHeader';
import Drawer from './layout/Drawer';
import TestWrapper from './layout/TestWrapper';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import LayoutTest from './layout/LayoutTest';
import ApplyWrapper from './apply/ApplyWrapper';
import Redirect from './apply/Redirect';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavHeader />
            <Route exact path="/" component={Landing} />
            <Route exact path="/apply" component={ApplyWrapper} />
            <Route exact path="/redirect" component={Redirect} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
