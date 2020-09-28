import React from "react"

export default class RefsAndDOM extends React.Component{

    constructor(){
        super()
        this.HelloDiv = React.createRef()
    }

    componentDidMount(){
        console.log(this.HelloDiv.current)
        this.HelloDiv.current.style.color="red"
    }

    render(){
        return(
            <div>
                Refs和DOM
                <div ref={ this.HelloDiv }>Hello</div> 
            </div>
        )
    }
}