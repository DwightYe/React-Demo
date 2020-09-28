import React from "react";
import PropTypes from "prop-types";

export default class PropsTypeDemo extends React.Component{
    render(){
        return(
            <div>
                Hello <span>{this.props.title}</span>
            </div>
        )
    }
}   

// PropsTypeDemo.propTypes = {
//     title:PropTypes.string.isRequired
// }

PropsTypeDemo.propTypes = {
    title:PropTypes.string.isRequired
}

PropsTypeDemo.defaultProps = {
    title:"默认值"
}