import React from 'react';
import { Card, Segment, Grid } from 'semantic-ui-react';

const TestCard = () => <Card inverted fluid header="Card" />;

const LayoutTest = () => {
  return (
    <div>
      <Segment inverted>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <TestCard />
            </Grid.Column>
            <Grid.Column width={13}>
              <TestCard />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <TestCard />
            </Grid.Column>
            <Grid.Column width={10}>
              <TestCard />
            </Grid.Column>
            <Grid.Column width={3}>
              <TestCard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default LayoutTest;
