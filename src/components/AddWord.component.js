import React from "react";
import { Form, Button, Segment, Header } from "semantic-ui-react";

class AddWord extends React.Component {
  submitWithId = e => {
    console.log("word leaving AddWord " + this.props.addWordId);
    this.props.onSubmit(e, this.props.addWordId);
  };

  render() {
    return (
      <Form size="large" onSubmit={this.submitWithId}>
        <Segment>
          <Header as="h4">{`Submit Form ${this.props.addWordId}`}</Header>
          <Form.Input fluid placeholder="New Word" />
          <Button color="blue" fluid size="large">
            Submit New Word
          </Button>
        </Segment>
        <br />
      </Form>
    );
  }
}

export default AddWord;
