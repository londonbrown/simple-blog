import React, { Component } from "react";
import { Card } from "react-bootstrap";

type PostPreviewProps = {
  id: string;
  title: string;
  createdAt: number;
  username: string;
  tags?: Array<string>;
};

class PostPreview extends Component<PostPreviewProps> {
  constructor(props: PostPreviewProps) {
    super(props);
  }

  render() {
    return (
      <Card className="mt-4 mb-4">
        <Card.Body>
          <Card.Title className="display-4">{this.props.title}</Card.Title>
          <hr />
          <Card.Text>
            <small className="text-muted">
              Created on {new Date(this.props.createdAt).toString()} | By{" "}
              <a href="#">{this.props.username}</a>
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
