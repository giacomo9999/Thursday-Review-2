import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment, List } from "semantic-ui-react";

class App extends Component {
  state = { words: ["murmur", "sycophant", "invariable"] };

  addWord = e => {
    e.preventDefault();
    console.log("New word coming in..." + e.target[0].value);
    const oldWords = this.state.words;
    oldWords.push(e.target[0].value);
    this.setState({ words: oldWords });
  };

  render() {
    const wordList = this.state.words.map((word, index) => (
      <List.Item key={index}>
        <p>{word}</p>
      </List.Item>
    ));

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
            <List size="large">{wordList}</List>
            <Form size="large" onSubmit={this.addWord}>
              <Segment>
                <Form.Input fluid placeholder="New Word" />
                <Button color="blue" fluid size="large">
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
