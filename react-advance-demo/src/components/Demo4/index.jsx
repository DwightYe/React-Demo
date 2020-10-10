import React from "react"

const withFetch = (ComposeComponent) => {
    return class extends React.Component {
        render() {
            return (
                <ComposeComponent {...this.props}/>
            )
        }
    }
}

class MyDate extends React.Component {
    render() {
        return (
            <div>
                MyDate: {this.props.date}
            </div>
        )
    }
}

const WithFetch = withFetch(MyDate)

export default class Demo4 extends React.Component {
    render() {
        return (
            <div>
                Demo4
                <WithFetch date = {"Hello With"} />
            </div>
        )
    }
}