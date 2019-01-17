import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 350 }}>
            <Header as="h2" color="teal" textAlign="center">
              List of Words
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input fluid placeholder="New Word" />
                <Button color="teal" fluid size="large">
                  Submit New Word
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
