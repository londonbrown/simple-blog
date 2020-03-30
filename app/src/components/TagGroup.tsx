import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import CancelIcon from "@material-ui/icons/Cancel";

type TagGroupProps = {
  tags: Set<string>;
  removeTagListener: (event: any) => void;
  className?: string;
};

type TagBadgesState = {
  tagBadges: JSX.Element[];
};

export function validateTag(tagValue: string): boolean {
  return /^\w+$/.test(tagValue);
}

export default class TagGroup extends Component<TagGroupProps, TagBadgesState> {
  render() {
    let badgesFromProps: JSX.Element[] = [];
    this.props.tags.forEach((value, key) => {
      badgesFromProps.push(
        <Badge className="mr-2" pill variant="primary" key={key}>
          <span style={{ verticalAlign: "middle" }}>{value}</span>
          <span
            style={{
              cursor: "pointer"
            }}
            data-tag-value={value}
            onClick={this.props.removeTagListener}
          >
            <CancelIcon className="ml-1" />
          </span>
        </Badge>
      );
    });
    return (
      <section className={this.props.className}>{badgesFromProps}</section>
    );
  }
}
