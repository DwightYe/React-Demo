import React from "react"
import PropTypes from "prop-types"

const Topic = (props) => {
    return (
        <div>
            Topic:
            <Comment />
        </div>
    )
}

const Comment = (props, context) => {
    return (
        <div>
            Comment:{ context.color}
        </div>
    )
}

export default class Demo3 extends React.Component {

    getChildContext() {
        return {
            color: "red"
        }
    }

    render() {
        return (
            <div>
                Demo3:<Topic color="red" />
            </div>
        )
    }
}

Comment.contextTypes = {
    color: PropTypes.string
}

Demo3.childContextTypes = {
    color: PropTypes.string
}