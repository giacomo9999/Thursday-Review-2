import React, { Component } from "react";
import { Card, Form, Button, Segment, Header } from "semantic-ui-react";

class AddWord extends React.Component {
  submitWithId = e => {};

  render() {
    return (
      <Form size="large" onSubmit={this.props.onSubmit}>
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
