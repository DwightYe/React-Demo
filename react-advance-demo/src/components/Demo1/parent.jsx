import React from "react"

const MyAPI = {
    count: 0,
    subscribe(cb){
        this.intervalId = setInterval(() => {
            this.count += 1
            cb(this.count)
        }, 1000);
    },
    unSubcribe(){
        clearInterval(this.intervalId)
        this.reset();
    },
    reset(){
        this.count = 0
    }
}

export default class Parent extends React.Component {

    state = {
        count:0
    }

    componentDidMount(){
        MyAPI.subscribe( (currentCount) =>{
            this.setState({
                count:currentCount
            })
        } )
    }

    render() {
        return (<div>
            Parent : {this.state.count}

        </div>)
    }
}