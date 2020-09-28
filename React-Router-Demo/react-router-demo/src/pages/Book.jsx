import React from "react"

export default class Book extends React.Component{
    render(){
        return(
            <div>
                <p>Book</p>
                U009 9W2S 8QQY SQSD
                U010 13SL W1BN S3HU
                { this.props.children }
            </div>
        )
    }
}