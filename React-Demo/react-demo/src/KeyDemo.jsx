import React from "react";

export default class KeyDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [
        {
          name: "iwen",
          age: 20,
          sex: "男",
          jobs: ["111", "222", "333"],
        },
        {
          name: "ime",
          age: 20,
          sex: "男",
          jobs: ["111", "222", "333"],
        },
        {
          name: "frank",
          age: 20,
          sex: "男",
          jobs: ["111", "222", "333"],
        },
      ],
    };
  }

  clickHandler = () => {
    console.log(0)
    this.setState({
      userInfo: this.state.userInfo.concat([{
          name: "sakura",
          age: 18,
          sex: "女",
          jobs: ["444", "555", "666"],
        }])
    },()=>{
        console.log(this.state.userInfo)
    });
  };

  render() {
    return (
      <div>
        列表渲染
        <ul>
          {this.state.userInfo.map((element, index) => {
            return (
              <li key={index}>
                <span>{element.name}</span>
                <span>{element.age}</span>
                <span>{element.sex}</span>
                <div>
                  {element.jobs.map((childElement, childKey) => {
                    return <span key={childKey}>{childElement}</span>;
                  })}
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={this.clickHandler}>添加数据</button>
      </div>
    );
  }
}
