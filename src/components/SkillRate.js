import React, { Component } from "react";

export default class SkillRate extends Component {
  render() {
    let { name, rate, color } = this.props;

    return (
      <div className="skill-rate">
        <div className="skill-name">
          <p>{name}</p>
        </div>
        <div className={`meter ${color}`}>
          <span style={{ width: `${rate}%` }}>
            <p className="rate">{rate}%</p>
            <span />
          </span>
        </div>
      </div>
    );
  }
}
