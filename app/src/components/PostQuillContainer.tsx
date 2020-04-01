import React, { Component } from "react";
import ReactQuill from "react-quill";
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
          syntax: true,
          toolbar: []
        }}
        className={"quill-no-toolbar"}
      />
    );
  }
}
