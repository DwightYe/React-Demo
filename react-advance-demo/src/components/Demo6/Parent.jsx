import React from "react"
import Errors from "./Errors"
import ErrorBoundary from "./ErrorBoundary"

export default class Parent extends React.Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        return (
            <div>
                <h3>Demo6 - Parent : {this.state.count}</h3>
                <ErrorBoundary render={(error, errorInfo) => <p>{ "加载组件发生错误" }</p>}>
                    <Errors />
                </ErrorBoundary>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}