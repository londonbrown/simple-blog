import React, { Component } from "react";
import { Col, Row, Card, Form, Button, ButtonToolbar } from "react-bootstrap";
import TagGroup from "./TagGroup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "../css/quill.css";
import GlobalContext from "../contexts/GlobalContext";

type PostComposerProps = {
  editMode?: boolean;
};

export default class PostComposer extends Component<PostComposerProps> {
  static contextType = GlobalContext;
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Row className="mt-0">
        <Col className="mt-0">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formPostTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="input" placeholder="Enter title" />
                </Form.Group>
                <Form.Group controlId="formPostContent">
                  <Form.Label>Content</Form.Label>
                  <ReactQuill />
                </Form.Group>
                <Form.Group controlId="formPostTags">
                  <Form.Label>Tags</Form.Label>
                  <Form.Control as="input" />
                  <Form.Text>
                    <TagGroup className="mt-2" tags={["string1", "string2"]} />
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Row className="row justify-content-end mr-0 ml-0">
                    <ButtonToolbar>
                      <Form.Group controlId="formPostCancel">
                        <Button className="mr-3" variant="outline-primary">
                          Cancel
                        </Button>
                      </Form.Group>
                      <Form.Group controlId="formPostSubmit">
                        <Button variant="primary">Submit</Button>
                      </Form.Group>
                    </ButtonToolbar>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
