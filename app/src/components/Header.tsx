import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Button, InputGroup } from "react-bootstrap";

import MaterialIcon from "@material/react-material-icon";

type HeaderProps = {
  className?: string;
};

export default class extends Component<HeaderProps> {
  render() {
    return (
      <div className={this.props.className}>
        <Navbar>
          <Navbar.Brand href="/">חי</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="#">Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Tutorials</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Recommendations</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <InputGroup>
              <FormControl type="text" placeholder="Search" />
              <Button>
                <MaterialIcon icon={"search"} />
              </Button>
            </InputGroup>
          </Form>
        </Navbar>
      </div>
    );
  }
}
