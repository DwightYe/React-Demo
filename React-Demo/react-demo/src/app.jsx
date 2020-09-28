import React from "react";
// import Home from "./Home";
// import MyNav from "./MyNav";
// import StateComponent from './StateComponent'
// import ComponentLife from './ComponentLife'
// import SetStateDemo from './setStateDemo'
// import IfDemo from "./ifDemo"
// import KeyDemo from "./KeyDemo"
// import FormDemo from "./FormDemo"
// import RefsAndDOM from "./RefsAndDOM"
// import RefsForm from "./RefsForm"
// import Parent from "./components/parent"
// import Compose from "./compose"
import PropsTypeDemo from "./PropsTypeDemo"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      title:"文本1"
    }
  }

  clickChange = () =>{
    this.setState({
      title : "文本2"
    })
  }

  render() {
    // const nav1 = ["首页", "视频", "学习"];
    // const nav2 = ["web", "java", "node"];
    return (
      <div>
        {/* <h1>Hello React Component</h1>
        <h3>学习React，最重要的是，心态要好!</h3>
        <Home />
        <MyNav nav={nav1} title='路径导航'/>
        <MyNav nav={nav2} title="路径导航"/> */}
        {/* <StateComponent /> */}
        {/* <ComponentLife title={ this.state.title } clickChanges={ this.clickChange }/> */}
        {/* <SetStateDemo /> */}
        {/* <IfDemo /> */}
        {/* <KeyDemo /> */}
        {/* <FormDemo />
        <RefsAndDOM /> */}
        {/* <RefsForm /> */}
        {/* <Parent /> */}
        {/* <Compose>
          <div>我是组合效果</div>
        </Compose> */}
        <PropsTypeDemo title="标题"/>
      </div>
    );
  }
}

export default App;
