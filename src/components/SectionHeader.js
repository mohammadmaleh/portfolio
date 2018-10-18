import React, { Component } from "react";

class SectionHeader extends Component {
  render() {
    let title = this.props.title;
    return (
      <div id="section-header">
        <p>{title}</p>
      </div>
    );
  }
}

export default SectionHeader;
