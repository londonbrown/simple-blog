import React, { Component } from "react";
import { Button, ButtonToolbar, Card, Col, Form, Row } from "react-bootstrap";
import TagGroup from "./TagGroup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "../css/quill.css";
import GlobalContext from "../contexts/GlobalContext";
import { Delta } from "quill";
import { RouteComponentProps } from "react-router";

type PostComposerState = {
  editorDelta: string | Delta | undefined;
  formValidated: boolean | undefined;
  title: string | undefined;
  tags: Array<string> | undefined;
  titleValid: boolean | undefined;
  tagsValid: boolean | undefined;
};

export type PostComposerParams = {
  editMode: string | undefined;
};

export default class PostComposer extends Component<
  RouteComponentProps<PostComposerParams>,
  PostComposerState
> {
  static contextType = GlobalContext;
  private readonly editorRef: React.RefObject<ReactQuill>;
  private readonly modules: {};

  constructor(props: RouteComponentProps<PostComposerParams>) {
    super(props);
    this.state = {
      title: undefined,
      tags: ["tag1", "tag2"],
      editorDelta: "",
      formValidated: undefined,
      titleValid: undefined,
      tagsValid: undefined
    };
    this.editorRef = React.createRef();
    this.handleQuillChange = this.handleQuillChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChangeEvent = this.handleFormChangeEvent.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleCancel() {
    this.props.history.goBack();
  }

  handleQuillChange() {
    if (
      this.editorRef.hasOwnProperty("current") &&
      this.editorRef.current !== null
    ) {
      this.setState({
        editorDelta: this.editorRef.current.getEditor().getContents()
      });
    }
  }

  handleFormChangeEvent(event: any) {
    let target = event.currentTarget;
    console.log(target);
    console.log(target.id);
    if ("id" in target) {
      switch (target.id) {
        case "formPostTitle":
          this.setState({
            title: target.value
          });
          break;
        case "formPostTags":
          break; // TODO update tags
        default:
          break;
      }
    }
  }

  handleFormSubmit(event: any) {
    event.preventDefault();
    this.context.client.submitPost({
      title: this.state.title,
      content: this.state.editorDelta,
      username: this.context.username
    });
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
                  <Form.Control
                    isValid={this.state.titleValid}
                    onChange={this.handleFormChangeEvent}
                    type="input"
                    placeholder="Enter title"
                  />
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
                  <Form.Control
                    onChange={this.handleFormChangeEvent}
                    isValid={this.state.tagsValid}
                    as="input"
                  />
                  <Form.Text>
                    {this.state.tags && (
                      <TagGroup className="mt-2" tags={this.state.tags} />
                    )}
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Row className="row justify-content-end mr-0 ml-0">
                    <ButtonToolbar>
                      <Form.Group controlId="formPostCancel">
                        <Button
                          onClick={this.handleCancel}
                          className="mr-3"
                          variant="outline-light"
                        >
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
