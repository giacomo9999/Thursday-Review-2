import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

class App extends Component {
  state = { words: [] };

  addWord = word => {
    console.log("New word coming in..." + word);
    const oldWords = this.state.words;
    const newWords = oldWords.push(word);
    this.setState({ words: newWords });
  };

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
            <Header as="h2" color="blue" textAlign="center">
              List of Words
            </Header>
            <Form size="large">
              <Segment>
                <Form.Input fluid placeholder="New Word" />
                <Button color="blue" fluid size="large" onSubmit={this.addWord}>
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
