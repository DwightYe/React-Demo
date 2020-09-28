import React from "react"
import { withRouter } from "react-router-dom"

class MineDemo extends React.Component{

    clickHandle = () =>{
        console.log(this.props);
    }

    render(){
        return(
            <div><button onClick = { this.clickHandle.bind(this) }>回到Home</button></div>
        )
    }
} 


export default withRouter(MineDemo)