import React, { Component } from "react";
import Post from "./Post";
import { RouteComponentProps, useLocation } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

type PostContainerState = {
  postData: any;
};

export type PostContainerParams = {
  postId: string;
};

export default class PostContainer extends Component<
  RouteComponentProps<PostContainerParams>,
  PostContainerState
> {
  static contextType = GlobalContext;
  constructor(props: RouteComponentProps<PostContainerParams>) {
    super(props);
    this.state = {
      postData: null
    };
  }

  async componentDidMount() {
    if (this.context.client && !this.state.postData) {
      try {
        const post = await this.context.client.getPost(
          this.props.match.params.postId
        );
        if (post) {
          const user = await this.context.client.getUser(post.userId);
          post.username = user.username;
          this.setState({
            postData: post
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  async componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      this.state.postData && (
        <Post
          id={this.state.postData.id}
          title={this.state.postData.title}
          content={this.state.postData.content}
          createdAt={this.state.postData.createdAt || 0}
          username={this.state.postData.username}
        />
      )
    );
  }
}
