import React, { Component } from "react";
import ReactQuill from "react-quill";
import "../scss/quill-dark.scss";
import { Delta } from "quill";

export type PostQuillContainerProps = {
  content: string | Delta;
};

export default class PostQuillContainer extends Component<
  PostQuillContainerProps
> {
  render() {
    return (
      <ReactQuill
        value={this.props.content}
        readOnly={true}
        modules={{
          toolbar: []
        }}
        className={"quill-no-toolbar"}
      />
    );
  }
}
