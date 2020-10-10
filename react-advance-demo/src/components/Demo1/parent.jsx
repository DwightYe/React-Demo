import React from "react"
import Child from "./Child"
import Child1 from "./Child1"


/**
 * 计数器例子
 *  定时器 网络请求 事件监听
 *  在组件销毁前都应该得到相应的处理
 */

const MyAPI = {
    count: 0,
    subscribe(cb){
        this.intervalId = setInterval(() => {
            this.count += 1
            cb(this.count)
        }, 1000);
    },
    unSubcribe(){
        clearInterval(this.intervalId)
        this.reset();
    },
    reset(){
        this.count = 0
    }
}

export default class Parent extends React.Component {

    state = {
        count:0
    }

    componentDidMount(){
        MyAPI.subscribe( (currentCount) =>{
            this.setState({
                count:currentCount
            })
        } )
    }

    componentWillUnmount(){
        MyAPI.unSubcribe()
    }

    render() {
        console.log("parent -> render");
        return (<div>
            Parent : {this.state.count}
            <Child num = { this.state.count }/>
            <Child1 num = { 1 }/>
        </div>)
    }
}