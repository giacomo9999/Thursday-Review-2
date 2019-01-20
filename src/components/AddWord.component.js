import React, { Component } from "react";
import { Card, Form, Button, Segment } from "semantic-ui-react";

class AddWord extends React.Component {
  render() {
    return (
      <Card>
        <Form size="large" onSubmit={this.props.onSubmit}>
          <Segment>
            <Form.Input fluid placeholder="New Word" />
            <Button color="blue" fluid size="large">
              Submit New Word
            </Button>
          </Segment>
        </Form>
      </Card>
    );
  }
}

export default AddWord;
