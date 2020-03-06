import React, { Component, MouseEvent } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import GlobalContext from "../contexts/GlobalContext";

export type PostProps = {
  id: string;
  title: JSX.Element;
  createdAt: number;
  content: JSX.Element;
  username: JSX.Element;
  tags?: Array<string>;
  canBeModal?: boolean;
};

class Post extends Component<PostProps> {
  static contextType = GlobalContext;
  constructor(props: PostProps) {
    super(props);
    this.onClickListener = this.onClickListener.bind(this);
  }

  onClickListener(event: MouseEvent): void {
    event.preventDefault();
    this.context.updateModal({
      enabled: true,
      title: this.props.title,
      body: this.props.content,
      footer: this.props.username
    });
  }

  render() {
    const title = (
      <Card.Title className="display-4">{this.props.title}</Card.Title>
    );
    return (
      <Card className="mt-4 mb-4">
        <Card.Body>
          {this.props.canBeModal ? (
            <LinkContainer
              onClick={this.onClickListener}
              to={`/post/${this.props.id}`}
            >
              {title}
            </LinkContainer>
          ) : (
            <>{title}</>
          )}
          <Card.Text>
            <small className="text-muted">
              Created on {new Date(this.props.createdAt).toString()}
            </small>
          </Card.Text>
          <hr />
          <Card.Text>{this.props.content}</Card.Text>
          <hr />
          <Card.Text>
            <small>By {this.props.username}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Post;
