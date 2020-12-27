import React from "react";

export default class Increment extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "ravikumar"
    };
  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <div>first Name: {this.state.name}</div>
        <div>second name: {this.state.secondname}</div>

        <button onClick={this.Increment}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
        <div onClick={() => this.setState({ name: "pranay" })}>
          update first state
        </div>
        <div onClick={() => this.setState({ secondname: "sai" })}>
          update second state
        </div>
      </div>
    );
  }
}
