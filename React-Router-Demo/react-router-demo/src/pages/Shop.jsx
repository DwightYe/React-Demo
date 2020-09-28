import React from "react"
import { Redirect,Prompt } from 'react-router-dom'

export default class Shop extends React.Component{

    state = {
        islogin:true,
        name:""
    }
    render(){
        const {islogin} = this.state;
        return(
            <div>
                {
                    islogin ? <div>shop</div>: <Redirect to="/" />
                }
                <Prompt 
                    when = { !!this.state.name }
                    message = { "确定要离开吗？" }
                />
                <input type="text" value={this.state.name} onChange = { (e) =>{this.setState({name:e.target.value})} }/>
            </div>
        )
    }
}