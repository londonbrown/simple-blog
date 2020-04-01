import React, { Component, MouseEvent } from "react";
import { Button, Col, Jumbotron, Row } from "react-bootstrap";
import Post from "./Post";
import PostSummary from "./PostSummary";
import GlobalContext from "../contexts/GlobalContext";

type HomeState = {
  posts: Array<any>;
  author: any;
  latestPost: any;
  mounted: boolean;
};

type HomeProps = {
  className?: string;
};

export default class Home extends Component<HomeProps, HomeState> {
  static contextType = GlobalContext;

  constructor(props: HomeProps) {
    super(props);
    this.state = {
      posts: [],
      author: null,
      latestPost: null,
      mounted: false
    };
    this.showLatestPost = this.showLatestPost.bind(this);
    this.updatePosts = this.updatePosts.bind(this);
  }

  async updatePosts() {
    if (!this.context.client) {
      console.debug("Waiting a tick on context...");
      setTimeout(this.updatePosts, 1);
    } else {
      if (this.state.posts.length === 0 && this.state.latestPost === null) {
        try {
          const postsByUserRequestResponse: Array<any> = await this.context.client.getPostsByUser(
            this.context.defaultUser.id
          );

          let latestPost = null;
          if (postsByUserRequestResponse.length > 0) {
            const latestPostId = postsByUserRequestResponse[0].id;
            latestPost = await this.context.client.getPost(latestPostId);
          }
          postsByUserRequestResponse.map(post => {
            post.username = this.context.defaultUser.username;
            return post;
          });
          this.setState({
            author: this.context.defaultUser,
            posts: postsByUserRequestResponse,
            latestPost: latestPost
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
  }

  async componentDidMount() {
    this.updatePosts();
  }

  showLatestPost(event: MouseEvent) {
    event.preventDefault();
    this.context.updateModal({
      enabled: true,
      title: this.state.latestPost.title,
      body: this.state.latestPost.content,
      footer: this.state.author.username
    });
  }

  render() {
    const latestPost = this.state.posts.length > 0 && (
      <>
        <hr className="my-2" />
        <p>View latest post</p>
        <p className="lead">
          <Button
            color="primary"
            onClick={this.showLatestPost}
            href={this.state.posts[0].link}
          >
            {this.state.posts[0].title}
          </Button>
        </p>
      </>
    );
    return (
      <div className={this.props.className}>
        <Jumbotron>
          <h1 className="display-4">lahiyam</h1>
          <p className="lead display-3">Nonsensical whisperings</p>
          {latestPost}
        </Jumbotron>
        <Row className="mt-0">
          <Col className="mt-0">
            {this.state.latestPost && (
              <Post
                id={this.state.latestPost.id}
                title={this.state.latestPost.title}
                createdAt={this.state.latestPost.createdAt}
                content={this.state.latestPost.content}
                username={this.state.author.username}
                canBeModal
              />
            )}
            {this.state.posts.map(post => {
              if (
                !this.state.latestPost ||
                post.id !== this.state.latestPost.id
              ) {
                return (
                  <PostSummary
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    createdAt={post.createdAt}
                    username={post.username}
                  />
                );
              }
            })}
          </Col>
        </Row>
      </div>
    );
  }
}
