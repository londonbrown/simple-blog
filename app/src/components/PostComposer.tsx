import React, { Component } from "react";
import { Button, ButtonToolbar, Card, Col, Form, Row } from "react-bootstrap";
import TagGroup, { validateTag } from "./TagGroup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "../css/quill.css";
import GlobalContext from "../contexts/GlobalContext";
import * as History from "history";
import * as Quill from "quill";
import { PostData } from "../types/Post";
type PostComposerState = {
  editorDelta: string | Quill.DeltaStatic | undefined;
  formValidated: boolean | undefined;
  title: string | undefined;
  tags: Set<string> | undefined;
  titleInvalid: boolean | undefined;
  tagsInvalid: boolean | undefined;
  quillValid: boolean | undefined;
};

export type PostComposerParams = {
  postData?: PostData;
  editMode?: string;
  history: History.History;
  onSubmit: (postData: PostData) => void;
  onSave: () => void;
};

export default class PostComposer extends Component<
  PostComposerParams,
  PostComposerState
> {
  static contextType = GlobalContext;
  private readonly editorRef: React.RefObject<ReactQuill>;
  private readonly modules: {};

  constructor(props: PostComposerParams) {
    super(props);
    this.state = {
      title: this.props.postData?.title,
      tags: this.props.postData?.tags || new Set<string>(),
      editorDelta: this.props.postData?.content || "",
      formValidated:
        (this.props.postData?.title &&
          this.props.postData?.title.length > 0 &&
          this.props.postData?.content !== undefined) ||
        false,
      titleInvalid: undefined,
      tagsInvalid: undefined,
      quillValid: true
    };
    this.editorRef = React.createRef();
    this.handleQuillChange = this.handleQuillChange.bind(this);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
    this.handleFormChangeEvent = this.handleFormChangeEvent.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.tagsChangeListener = this.tagsChangeListener.bind(this);
    this.removeTagListener = this.removeTagListener.bind(this);
    this.validateForm = this.validateForm.bind(this);
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
          if (target.value.trim().length > 0) {
            this.setState({
              titleInvalid: false
            });
          } else {
            this.setState({
              titleInvalid: undefined,
              formValidated: undefined
            });
          }
          this.setState({
            title: target.value.trim()
          });
          break;
        case "formPostTags":
          target.value = target.value.trim();
          if (target.value === "" || validateTag(target.value)) {
            if (this.state.tagsInvalid) {
              this.setState({
                tagsInvalid: false
              });
            }
          } else {
            if (!this.state.tagsInvalid) {
              this.setState({
                tagsInvalid: true
              });
            }
          }
          break; // TODO update tags validator
        default:
          break;
      }
    }
  }

  handlePreviewClick(event: any) {
    event.preventDefault();
    if (this.validateForm()) {
      if (this.state.title && this.state.editorDelta && this.state.tags) {
        let postData = {
          title: this.state.title,
          content: this.state.editorDelta,
          tags: this.state.tags
        };
        this.props.onSubmit(postData);
      }
    }
    // swap component
  }

  tagsChangeListener(event: any) {
    if (event.key === ",") {
      event.preventDefault();
      let tagValue = event.currentTarget.value.trim();
      let currTags = this.state.tags;
      if (tagValue !== "" && validateTag(tagValue)) {
        currTags?.add(tagValue);
        this.setState({
          tags: currTags
        });
        event.currentTarget.value = "";
      }
    }
  }

  removeTagListener(event: any) {
    let tagToRemove = event.currentTarget.getAttribute("data-tag-value");
    let currTags = this.state.tags;
    currTags?.delete(tagToRemove);
    this.setState({
      tags: currTags
    });
  }

  validateForm(): boolean {
    if (this.state.formValidated) {
      return true;
    }
    let isValid =
      this.state.titleInvalid === false && this.state.quillValid === true;
    this.setState({
      formValidated: isValid
    });
    return isValid;
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
                    isInvalid={this.state.titleInvalid}
                    onChange={this.handleFormChangeEvent}
                    type="input"
                    placeholder="Enter title"
                    value={this.state.title}
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
                    isInvalid={this.state.tagsInvalid}
                    as="input"
                    onKeyPress={this.tagsChangeListener}
                  />
                  <Form.Text>
                    {this.state.tags && (
                      <TagGroup
                        className="mt-2"
                        tags={this.state.tags}
                        removeTagListener={this.removeTagListener}
                      />
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
                          onClick={this.handlePreviewClick}
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
