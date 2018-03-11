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
import AvailabilityWrapper from './dashboard/AvailabilityWrapper';
import ExpertiseWrapper from './dashboard/ExpertiseWrapper';
import SelectSpecialization from './dashboard/SelectSpecialization';
import SelectServices from './dashboard/SelectServices';
import ServicesWrapper from './dashboard/ServicesWrapper';
import SelectLinks from './dashboard/SelectLinks';
import LinksWrapper from './dashboard/LinksWrapper';
import AddInfo from './dashboard/AddInfo';
import InfoWrapper from './dashboard/InfoWrapper';
import SetRate from './dashboard/SetRate';
import SetRateWrapper from './dashboard/SetRateWrapper';
import BrowseWrapper from './browse/BrowseWrapper';
import ProfilePageWrapper from './browse/ProfilePageWrapper';
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
            <Route exact path="/" component={BrowseWrapper} />
            <Route exact path="/apply" component={ApplyWrapper} />
            <Route exact path="/redirect" component={Redirect} />
            <Route exact path="/thanks" component={Thanks} />
            <Route exact path="/Admin" component={AdminWrapper} />
            <Route
              exact
              path="/dashboard/sensei/schedule"
              component={AvailabilityWrapper}
            />
            <Route
              exact
              path="/dashboard/sensei/expertise"
              component={ExpertiseWrapper}
            />
            <Route
              exact
              path="/dashboard/sensei/services"
              component={ServicesWrapper}
            />
            <Route
              exact
              path="/dashboard/sensei/links"
              component={LinksWrapper}
            />
            <Route
              exact
              path="/dashboard/sensei/info"
              component={InfoWrapper}
            />
            <Route
              exact
              path="/dashboard/sensei/rate"
              component={SetRateWrapper}
            />
            <Route exact path="/browse" component={BrowseWrapper} />
            <Route path="/sensei/:senseiId" component={ProfilePageWrapper} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
