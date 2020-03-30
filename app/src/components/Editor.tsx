import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import PostComposer from "./PostComposer";
import PostPreview from "./PostPreview";
import Quill, * as quill from "quill";
const Delta = Quill.import("delta");

export type EditorProps = {
  mode: string;
};
type EditorState = {
  postData: PostData | undefined;
  preview: boolean;
};
export type PostData = {
  id?: string;
  title: string;
  createdAt?: number;
  content: string | quill.DeltaStatic;
  username?: string;
  tags?: Set<string> | undefined;
};
export default class Editor extends Component<
  RouteComponentProps<EditorProps>,
  EditorState
> {
  constructor(props: RouteComponentProps<EditorProps>) {
    super(props);
    const delta = new Delta();
    delta.insert("Hello, World!!!");
    this.state = {
      postData: {
        title: "Title",
        content: delta,
        tags: new Set<string>(["tag1", "tag2"])
      },
      preview: true
    };
    this.postDataChangeListener = this.postDataChangeListener.bind(this);
    this.toggleComposer = this.toggleComposer.bind(this);
  }

  postDataChangeListener(postData: PostData) {
    this.setState({
      postData: postData,
      preview: true
    });
  }

  toggleComposer(): void {
    this.setState({
      preview: false
    });
  }

  render() {
    return (
      <>
        {this.state.postData && this.state.preview ? (
          <PostPreview
            onEditor={this.toggleComposer}
            postData={this.state.postData}
          />
        ) : (
          <PostComposer
            editMode={this.props.match.params.mode}
            history={this.props.history}
            onSubmit={this.postDataChangeListener}
          />
        )}
      </>
    );
  }
}
