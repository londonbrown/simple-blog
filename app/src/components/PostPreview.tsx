import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import MaterialIcon from "@material/react-material-icon";
import Post from "./Post";
import { PostData } from "../types/Post";
import GlobalContext from "../contexts/GlobalContext";

type PostPreviewProps = {
  postData: PostData;
  onEditor: () => void;
  onSave: () => void;
};

export default class PostPreview extends Component<PostPreviewProps> {
  static contextType = GlobalContext;
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
              variant="outline-info"
              className="mr-2"
            >
              <MaterialIcon style={{ verticalAlign: "middle" }} icon="edit" />
              <span className={"ml-1"} style={{ verticalAlign: "middle" }}>
                Editor
              </span>
            </Button>
            <Button variant="info" onClick={this.props.onSave}>
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
          username={
            this.context.defaultUser && this.context.defaultUser.username
          }
        />
      </>
    );
  }
}
