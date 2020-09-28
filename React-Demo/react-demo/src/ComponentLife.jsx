import React from "react";

export default class ComponentLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }

  //在组件渲染之前执行
  componentWillMount() {
    console.log("componentWillMount");
  }
  //在组件渲染之后执行
  componentDidMount() {
    console.log("componentDidMount");
  }
  //返回true/false 是否允许改变
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true
  }
  //数据在改变之前执行(state,props)
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  //数据修改完成执行(state,props)
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  //props改变执行
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  //组件卸载前执行
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeHandler = () =>{
    this.setState({
      count : (this.state.count + 1)
    })
  }

  clickChange = () =>{
    this.props.clickChanges()
  }

  render() {
    const { count } = this.state;
    return (
    <div>
      生命周期:{ count } - { this.props.title }
      <button onClick={ this.changeHandler }>修改</button>
      <button onClick={ this.clickChange }>修改title</button>
    </div>
    );
  }
}
