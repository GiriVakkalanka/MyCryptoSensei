import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
//import Header from './Header';
import NavHeader from './layout/NavHeader';
//import Drawer from './layout/Drawer';
//import TestWrapper from './layout/TestWrapper';
//import Dashboard from './Dashboard';
//import SurveyNew from './surveys/SurveyNew';
//import LayoutTest from './layout/LayoutTest';
import ApplyWrapper from './apply/ApplyWrapper';
import Redirect from './apply/Redirect';
import Thanks from './apply/Thanks';
import AdminWrapper from './admin/AdminWrapper';
import SenseiAvailability from './dashboard/SenseiAvailability';
import SelectSpecialization from './dashboard/SelectSpecialization';
import SelectServices from './dashboard/SelectServices';
import SelectLinks from './dashboard/SelectLinks';

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
            <Route exact path="/thanks" component={Thanks} />
            <Route exact path="/Admin" component={AdminWrapper} />
            <Route
              exact
              path="/dashboard/schedule"
              component={SenseiAvailability}
            />
            <Route
              exact
              path="/dashboard/specialization"
              component={SelectSpecialization}
            />
            <Route
              exact
              path="/dashboard/services"
              component={SelectServices}
            />
            <Route exact path="/dashboard/links" component={SelectLinks} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
