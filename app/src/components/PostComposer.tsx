import React, { Component } from "react";
import { Button, ButtonToolbar, Card, Col, Form, Row } from "react-bootstrap";
import TagGroup from "./TagGroup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "../css/quill.css";
import GlobalContext from "../contexts/GlobalContext";
import { Delta } from "quill";

type PostComposerState = {
  editorDelta: string | Delta | undefined;
  formValidated: boolean | undefined;
};

type PostComposerProps = {
  editMode?: boolean;
};

export default class PostComposer extends Component<
  PostComposerProps,
  PostComposerState
> {
  static contextType = GlobalContext;
  private readonly editorRef: React.RefObject<ReactQuill>;
  private readonly modules: {};

  constructor(props: any) {
    super(props);
    this.state = {
      editorDelta: "",
      formValidated: undefined
    };
    this.editorRef = React.createRef();
    this.handleQuillChange = this.handleQuillChange.bind(this);
    this.modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["link", "image", "video"], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }],
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"]
      ]
    };
  }

  handleQuillChange(event: any) {
    if (
      this.editorRef.hasOwnProperty("current") &&
      this.editorRef.current !== null
    ) {
      this.setState({
        editorDelta: this.editorRef.current.getEditor().getContents()
      });
    }
  }

  handleFormSubmit(event: any) {
    event.preventDefault();
    alert("Form submitted");
  }

  render() {
    return (
      <Row className="mt-0">
        <Col className="mt-0">
          <Card>
            <Card.Body>
              <Form validated={this.state.formValidated}>
                <Form.Group controlId="formPostTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="input" placeholder="Enter title" />
                </Form.Group>
                <Form.Group controlId="formPostContent">
                  <Form.Label>Content</Form.Label>
                  <ReactQuill
                    modules={this.modules}
                    ref={this.editorRef}
                    defaultValue={this.state.editorDelta}
                    onChange={this.handleQuillChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPostTags">
                  <Form.Label>Tags</Form.Label>
                  <Form.Control as="input" />
                  <Form.Text>
                    <TagGroup className="mt-2" tags={["Tag", "AnotherTag"]} />
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Row className="row justify-content-end mr-0 ml-0">
                    <ButtonToolbar>
                      <Form.Group controlId="formPostCancel">
                        <Button className="mr-3" variant="outline-light">
                          Cancel
                        </Button>
                      </Form.Group>
                      <Form.Group controlId="formPostSubmit">
                        <Button
                          onClick={this.handleFormSubmit}
                          variant="primary"
                        >
                          Preview
                        </Button>
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
