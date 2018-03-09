//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Card, Segment, Grid, Header, Icon, Divider } from 'semantic-ui-react';
import ChipInput from 'material-ui-chip-input';

class SelectSpecialization extends Component {
  handleAddChip(chip) {
    const chips = this.props.auth ? this.props.auth.specialization : [];
    //const newChips = this.state.chips;
    //console.log(chips);
    chips.push(chip);
    //this.setState({ chips: newChips });
    this.props.saveSpecialization(chips);
  }

  handleDeleteChip(chip, index) {
    //console.log(index);
    const chips = this.props.auth ? this.props.auth.specialization : [];
    //let newChips = this.state.chips;
    chips.splice(index, 1);
    //newChips = [...newChips.slice(0, index), ...newChips.slice(index + 1)];
    //this.setState({ chips: newChips });
    this.props.saveSpecialization(chips);
  }

  render() {
    return (
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" icon>
              <Icon name="suitcase" />
              <Header.Content>Add your areas of specialization</Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <ChipInput
            value={this.props.auth ? this.props.auth.specialization : []}
            onRequestAdd={chip => this.handleAddChip(chip)}
            onRequestDelete={(chip, index) =>
              this.handleDeleteChip(chip, index)}
            hintText="Type your areas of specialization here. Press Enter after each one."
            fullWidth={true}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SelectSpecialization);
