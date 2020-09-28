import React from "react";

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      flag: true,
    };
  }

  increment() {
    this.setState({
      count: (this.state.count + 1),
    });
  }

  decrement = () => {
    this.setState({
      count: (this.state.count - 1),
    });
  };

  render() {
    let showView = this.state.flag ? "我是对的" : "我是错的";
    return (
      <div>
        <h3>组件的State</h3>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <p>{showView}</p>
      </div>
    );
  }
}
