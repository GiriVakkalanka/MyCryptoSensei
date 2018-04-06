//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Landing.css';
import Header from './header/Header';
import Service from './service/Service';
import Banner from './banner/Banner';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';
import HitComponent from '../browse/HitComponent';
import { createConnector } from 'react-instantsearch';

const Hit = ({ hit }) => (
  // <div>
  //   <h1>{hit.email}</h1>
  // </div>
  <HitComponent
    name={hit.fullName}
    pic={hit.pic}
    rate={hit.rate}
    desc={hit.description}
    city={hit.city}
    country={hit.country}
    specialization={hit.specialization}
    expertise={hit.services}
    links={hit.links}
    id={hit._id}
  />
);

//const Content = () => <Hits hitComponent={Hit} />;

const Content = createConnector({
  displayName: 'ConditionalQuery',
  getProvidedProps(props, searchState, searchResults) {
    const { query, hits } = searchResults.results ? searchResults.results : {};
    return { query, hits };
  }
})(({ query, hits }) => {
  const hs =
    hits && query
      ? hits.map(hit => (
          <HitComponent
            name={hit.fullName}
            pic={hit.pic}
            rate={hit.rate}
            desc={hit.description}
            city={hit.city}
            country={hit.country}
            specialization={hit.specialization}
            expertise={hit.services}
            links={hit.links}
            id={hit._id}
          />
        ))
      : null;
  return <div id="hits">{hs}</div>;
});

class Landing extends Component {
  render() {
    return (
      <div>
        <InstantSearch
          apiKey="53d73d0deaf00b036b6bc83b99f998b1"
          appId="ND8QXFOQUH"
          indexName="KoinVetDev"
        >
          <div className="header">
            <Header />
          </div>
          <div className="banner">
            <Banner />
          </div>
          <Content />
          <div className="salesLine">
            <p id="salesText">Talk to a Sensei about...</p>
          </div>

          <div className="container">
            <div className="serviceOne fadeInLeft">
              <Service
                icon="wallet"
                service="Wallet Setup"
                description="Learn how to purchase bitcoin and other altcoins and store them safely in a cold-storage wallet."
              />
            </div>
            <div className="serviceTwo fadeInUp">
              <Service
                icon="whitepaper"
                service="Whitepaper Analysis"
                description="Talk to the experts about the technical foundations and business opportunities of any token."
              />
            </div>
            <div className="serviceThree fadeInRight">
              <Service
                icon="tax"
                service="Tax Consultation"
                description="The IRS is ready. Are you? Consult with a CPA to understand the tax rules of crypto investing."
              />
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Landing);
