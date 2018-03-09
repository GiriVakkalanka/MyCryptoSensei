//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Card,
  Segment,
  Grid,
  Header,
  Icon,
  Input,
  Divider
} from 'semantic-ui-react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';
import HitComponent from './HitComponent';

const Hit = ({ hit }) => (
  // <div>
  //   <h1>{hit.email}</h1>
  // </div>
  <HitComponent
    name={hit.name}
    pic={hit.pic}
    rate={hit.rate}
    desc={hit.description}
    city={hit.city}
    country={hit.country}
    specialization={hit.specialization}
    expertise={hit.expertise}
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
    return (
      <div>
        <InstantSearch
          apiKey="53d73d0deaf00b036b6bc83b99f998b1"
          appId="ND8QXFOQUH"
          indexName="KoinVetDev"
        >
          <Grid stackable container>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header as="h1" icon>
                  <Icon name="dollar" />
                  <Header.Content>Apply to be a Sensei</Header.Content>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Input size="massive" fluid>
                <SearchBox
                  translations={{ placeholder: 'Search for Senseis' }}
                />
              </Input>
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
