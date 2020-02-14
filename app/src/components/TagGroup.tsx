import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import CancelIcon from "@material-ui/icons/Cancel";
import MaterialIcon from "@material/react-material-icon";

type TagGroupProps = {
  tags: Array<string>;
  className?: string;
}

export default class TagGroup extends Component<TagGroupProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let tagBadges = this.props.tags.map(tag => {
      return <Badge className="mr-2" pill variant="primary" key={tag}>
        {tag}
        <span>
            <CancelIcon className="ml-1"/>
        </span>
      </Badge>;
    });
    return (
      <section className={this.props.className}>
        {tagBadges}
      </section>
    );
  }
}
