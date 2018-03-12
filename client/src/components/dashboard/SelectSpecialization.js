//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid } from 'semantic-ui-react';
import ChipInput from 'material-ui-chip-input';
import DashboardHeader from './DashboardHeader';
import DashboardNavigator from './DashboardNavigator';

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
      <div>
        <DashboardHeader
          header="Add Expertise"
          title="Enter your areas of expertise"
          subtitle="Enter subject matter in the field below and press enter to save the tag"
          icon="star"
        />
        <Grid stackable container>
          <Grid.Row>
            <ChipInput
              value={this.props.auth ? this.props.auth.specialization : []}
              onRequestAdd={chip => this.handleAddChip(chip)}
              onRequestDelete={(chip, index) =>
                this.handleDeleteChip(chip, index)}
              hintText="ex. ethereum, litecoin, ERC20, SegWit, etc. "
              fullWidth={true}
            />
          </Grid.Row>
          <DashboardNavigator
            prev="/dashboard/sensei/services"
            next="/dashboard/sensei/rate"
          />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SelectSpecialization);
