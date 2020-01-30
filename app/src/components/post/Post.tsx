import React from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

export interface Props {
    id: string;
    title: string;
    createdAt: number;
    content: string;
    username: string;
    tags?: Array<string>;
}

function Post(this: any, {
    id, title, createdAt, content,
    username, tags
}: Props) {

    return (
        <Card>
            <CardBody>
                <CardTitle className="display-4">
                    {title}
                </CardTitle>
                <CardText>
                    <small className="text-muted">
                        Created on {new Date(createdAt).toString()}
                    </small>
                </CardText>
                <hr />
                <CardText>
                    {content}
                </CardText>
                <hr />
                <CardText>
                    <small>
                        By <a href="#">{username}</a>
                    </small>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Post;
