import React from "react"

export default class RefsForm extends React.Component{

    constructor(){
        super()
        this.username = React.createRef()
        this.psw = React.createRef()
    }

    componentDidMount(){
    }

    clickHandler = (e) =>{
        console.log(this.username.current.value)
        console.log(this.psw.current.value)
    }

    render(){
        return(
            <div>
                RefsForm
                <input type="text" ref={ this.username }/>
                <input type="text" ref={ this.psw }/>
                <button onClick={ this.clickHandler }>提交</button>
            </div>
        )
    }
}