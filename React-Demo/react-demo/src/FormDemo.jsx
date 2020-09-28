import React from "react"

export default class FormDemo extends React.Component{

    constructor(){
        super()
        this.state = {
            value:""
        }
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        console.log(this.state.value)
    }

    onchangeHandler = (e) =>{
        this.setState({
            value:e.target.value
        })
    }

    render(){
        return(
            <div>
                表单提交
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" value={ this.state.value } onChange={ this.onchangeHandler }/>
                    <button type="submit">提交</button>
                </form>
            </div>
        )
    }
}