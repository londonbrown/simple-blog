import React, { Component } from "react";
import { Card } from "react-bootstrap";

type PostProps = {
  id: string;
  title: string;
  createdAt: number;
  content: string;
  username: string;
  tags?: Array<string>;
};

class PostPreview extends Component<PostProps> {
  constructor(props: PostProps) {
    super(props);
  }
  render() {
    return (
      <Card className="mt-4 mb-4">
        <Card.Body>
          <Card.Title className="display-4">{this.props.title}</Card.Title>
          <Card.Text>
            <small className="text-muted">
              Created on {new Date(this.props.createdAt).toString()}
            </small>
          </Card.Text>
          <hr />
          <Card.Text>{this.props.content}</Card.Text>
          <hr />
          <Card.Text>
            <small>
              By <a href="#">{this.props.username}</a>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

// function PostOld(
//   this: any,
//   { id, title, createdAt, content, username, tags }: PostState
// ) {
//   return (

//   );
// }

export default PostPreview;
