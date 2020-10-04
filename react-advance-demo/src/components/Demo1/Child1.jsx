import React from "react"

export default class Child1 extends React.PureComponent{

    render(){
        console.log("child1 -> render");
        return(
            <div>
                Hello Child1:{ this.props.num }
            </div>
        )
    }
}