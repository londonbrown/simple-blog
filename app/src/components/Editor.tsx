import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import PostComposer from "./PostComposer";
import PostPreview from "./PostPreview";
import Quill from "quill";
import GlobalContext from "../contexts/GlobalContext";
import { PostData } from "../types/Post";
const Delta = Quill.import("delta");

export type EditorProps = {
  mode: string;
};
type EditorState = {
  postData: PostData | undefined;
  preview: boolean;
};
export default class Editor extends Component<
  RouteComponentProps<EditorProps>,
  EditorState
> {
  static contextType = GlobalContext;
  constructor(props: RouteComponentProps<EditorProps>) {
    super(props);
    const delta = new Delta();
    delta.insert("London", { size: "huge" });
    delta.insert("\n", { header: 1 });
    delta.insert('console.log("blogging is fun")');
    delta.insert("\n", { "code-block": true });
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
    this.savePostData = this.savePostData.bind(this);
  }

  postDataChangeListener(postData: PostData) {
    this.setState({
      postData: postData,
      preview: true
    });
  }

  toggleComposer(): void {
    this.setState({
      preview: !this.state.preview
    });
  }

  savePostData() {
    if (this.state.postData) {
      this.context.client.submitPost(this.state.postData);
    }
  }

  render() {
    return (
      <>
        {this.state.postData && this.state.preview ? (
          <PostPreview
            onEditor={this.toggleComposer}
            postData={this.state.postData}
            onSave={this.savePostData}
          />
        ) : (
          <PostComposer
            postData={this.state.postData}
            editMode={this.props.match.params.mode}
            history={this.props.history}
            onSubmit={this.postDataChangeListener}
            onSave={this.savePostData}
          />
        )}
      </>
    );
  }
}
