import React from "react";
export default class Address extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
