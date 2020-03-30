import React, { Component } from "react";
import { PostData } from "./Editor";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import MaterialIcon from "@material/react-material-icon";
import Post from "./Post";
import Quill from "quill";

type PostPreviewProps = {
  postData: PostData;
  onEditor: () => void;
};

export default class PostPreview extends Component<PostPreviewProps> {
  render() {
    return (
      <>
        <Alert key={"preview-alert"} variant="info">
          <Alert.Heading>
            This a preview of what the post will look like.
          </Alert.Heading>
          <p>
            If everything looks good, click the <b>Save</b> button. If you need
            to make changes, click the <b>Editor</b> button.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={this.props.onEditor}
              variant="outline-secondary"
              className="mr-2"
            >
              <MaterialIcon style={{ verticalAlign: "middle" }} icon="edit" />
              <span className={"ml-1"} style={{ verticalAlign: "middle" }}>
                Editor
              </span>
            </Button>
            <Button variant="primary">
              <MaterialIcon style={{ verticalAlign: "middle" }} icon="save" />
              <span className={"ml-1"} style={{ verticalAlign: "middle" }}>
                Save
              </span>
            </Button>
          </div>
        </Alert>
        <Post
          title={this.props.postData.title}
          content={this.props.postData.content}
          tags={this.props.postData.tags}
        />
      </>
    );
  }
}
