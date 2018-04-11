import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Grid, Header, Form } from 'semantic-ui-react';
import moment from 'moment';
class MakeRequest extends Component {
  state = { service: '', note: '', isChecked: false };
  renderServiceOptions() {
    return _.map(this.props.senseiPage.services, service => {
      return { key: service, text: service, value: service };
    });
  }
  handleChoice(e, { value }) {
    this.setState({ service: { value } });
  }
  handleNote(e, { value }) {
    this.setState({ note: { value } });
  }
  handleCheck(e, { checked }) {
    console.log(checked);
    this.setState({ isChecked: !checked });
  }
  handleSubmit() {
    const request = {
      sensei: this.props.senseiPage._id,
      service: this.state.service.value,
      note: this.state.note.value,
      date: this.props.selectedWindow.date,
      time: this.props.selectedWindow.startTime
    };
    this.props.submitRequest(request);
  }
  render() {
    const options = this.renderServiceOptions();
    return (
      <div>
        <Grid centered stackable container>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header>
                <Header.Subheader>Request an hour session on</Header.Subheader>
                {moment(this.props.selectedWindow.date).format(
                  'dddd, MMMM Do YYYY'
                )}
              </Header>
              <Header>
                <Header.Subheader>Starting at</Header.Subheader>
                {moment(this.props.selectedWindow.startTime).format('h:mm A')}
              </Header>
              <Form>
                <Form.Select
                  options={options}
                  label="Service wanted"
                  placeholder="Choose service"
                  onChange={(e, { value }) => this.handleChoice(e, { value })}
                />
                <Form.TextArea
                  label="Add a note"
                  placeholder="Add specifics of your request"
                  onChange={(e, { value }) => this.handleNote(e, { value })}
                />
                <Form.Checkbox
                  checked={this.state.checked}
                  onChange={(e, { checked }) =>
                    this.handleCheck(e, { checked })}
                  label="I agree to the Terms and Conditions"
                />
                <Form.Button onClick={() => this.handleSubmit()}>
                  Submit request
                </Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ senseiPage, selectedWindow }) {
  return { senseiPage, selectedWindow };
}

export default connect(mapStateToProps, actions)(MakeRequest);
