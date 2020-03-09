import React, { Component } from "react";
import { Card, Form, Row } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <Row className="mt-5">
        <Card className="d-flex align-content-stretch">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="loginEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}
