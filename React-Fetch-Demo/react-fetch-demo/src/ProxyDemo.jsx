import React from "react";

export default class ProxyDemo extends React.Component {
  componentDidMount() {
    fetch("/api/list")
      .then((res) => {res.json()})
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return <div>hello</div>;
  }
}
