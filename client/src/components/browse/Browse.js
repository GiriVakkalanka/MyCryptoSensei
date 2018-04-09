//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid, Header, Divider, Button, Image, Input } from 'semantic-ui-react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';
import HitComponent from './hitComponent/HitComponent';
//import ServiceGallery from './ServiceGallery';
import Logo from '../../images/sensei_1a.png';
import './Browse.css';

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

const test = 'test';

const Content = () => (
  <div className="content">
    <Hits hitComponent={Hit} />
  </div>
);

class Browse extends Component {
  render() {
    const renderButton = <Button />;
    return (
      <div>
        <Image centered size="big" src={Logo} />
        <Header textAlign="center" size="huge">
          Connect with safe and reliable experts for all of your crypto needs.
        </Header>
        <InstantSearch
          apiKey="53d73d0deaf00b036b6bc83b99f998b1"
          appId="ND8QXFOQUH"
          indexName="KoinVetDev"
        >
          <div id="header">
            <SearchBox
              translations={{ placeholder: 'Search anything' }}
              reset={renderButton}
              style={{ background: 'red' }}
            />
          </div>
          <Divider />
          <Grid stackable container style={{ paddingLeft: 40, paddingTop: 40 }}>
            <Grid.Row>
              <Content />
            </Grid.Row>
            <Divider />
          </Grid>
        </InstantSearch>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(Browse);
