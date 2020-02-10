import React, { Component } from "react";
import Post, { PostProps } from "./Post";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import APIHTTPClient from "../clients/APIHTTPClient";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

type PostContainerState = {
  postData: any;
};

export default class PostContainer extends Component<{}, PostContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      postData: null
    };
  }
  async componentDidMount() {
    const queryString = console.log(this);
    console.log(queryString);
    let id = "8e9f5a70-9595-4462-944e-6e1c6390e417";
    try {
      const post = await APIHTTPClient.getPost(id);
      const user = await APIHTTPClient.getUser(post.userId);
      post.username = user.username;
      this.setState({
        postData: post
      });
    } catch (e) {
      console.error(e);
    }
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
