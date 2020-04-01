import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Button, InputGroup } from "react-bootstrap";

import MaterialIcon from "@material/react-material-icon";
import { LinkContainer } from "react-router-bootstrap";
import AppRoutes from "../routes/AppRoutes.enum";

type HeaderProps = {
  className?: string;
};

export default class extends Component<HeaderProps> {
  render() {
    return (
      <div className={this.props.className}>
        <Navbar expand="md" variant={"dark"} className="px-md-0">
          <Navbar.Brand href="/">חי</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="https://www.youtube.com">YouTube</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Tutorials</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Recommendations</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto mr-lg-2 mr-sm-0">
            <LinkContainer to={AppRoutes.NEW}>
              <Nav.Link>
                <Nav.Item>
                  <span className="mr-1" style={{ verticalAlign: "middle" }}>
                    Add Post
                  </span>
                  <MaterialIcon
                    style={{ verticalAlign: "middle" }}
                    icon={"add_circle"}
                  />
                </Nav.Item>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <Navbar.Collapse>
              <InputGroup>
                <FormControl type="text" placeholder="Search" />
                <InputGroup.Append>
                  <Button variant={"secondary"} className={"py-0"}>
                    <MaterialIcon className={"align-middle"} icon={"search"} />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Navbar.Collapse>
          </Form>
        </Navbar>
      </div>
    );
  }
}
