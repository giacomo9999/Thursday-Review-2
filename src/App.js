import React, { Component } from "react";
import { Grid, Header, List } from "semantic-ui-react";
import AddWord from "./components/AddWord.component";

class App extends Component {
  state = { words: ["murmur", "sycophant", "invariable"] };

  addWord = (e, source) => {
    e.preventDefault();
    console.log("New word coming in from AddWord " + source + "..." + e.target[0].value);
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
            <AddWord onSubmit={this.addWord} addWordId="Alpha" />
            <AddWord onSubmit={this.addWord} addWordId="Beta" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
