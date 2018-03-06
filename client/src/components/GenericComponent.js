import React from 'react';
import { Card, Segment, Grid } from 'semantic-ui-react';

const GenericComponent = () => {
  return (
    <div>
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column width={3}>
            <Card style={{ backgroundColor: 'yellow' }} fluid header="Card 1" />
          </Grid.Column>
          <Grid.Column width={11}>
            <Card fluid header="Card 2" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Card fluid header="Card 3" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card fluid header="Card 4" />
          </Grid.Column>
          <Grid.Column width={1}>
            <Card fluid header="Card 5" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default GenericComponent;
