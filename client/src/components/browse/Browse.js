//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid, Header, Divider, Button, Image } from 'semantic-ui-react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';
import HitComponent from './HitComponent';
//import ServiceGallery from './ServiceGallery';
import Logo from '../../images/sensei_1a.png';

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
        <Image style={{ paddingLeft: '40' }} size="big" src={Logo} />
        <Header style={{ paddingLeft: '60' }} size="huge">
          Connect with safe and reliable experts for all of your crypto needs.
        </Header>

        <InstantSearch
          apiKey="53d73d0deaf00b036b6bc83b99f998b1"
          appId="ND8QXFOQUH"
          indexName="KoinVetDev"
        >
          <Grid stackable container>
            <Grid.Row>
              <SearchBox
                translations={{ placeholder: 'Search for Senseis' }}
                reset={renderButton}
              />
            </Grid.Row>
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
