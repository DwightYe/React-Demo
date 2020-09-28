import React from 'react';
import Parent from "./components/coms/Parent"
import { connect } from "react-redux"
// import {increment ,decrement} from "./actions/counter"
import * as counterActions from "./actions/counter"
import { bindActionCreators } from "redux"
import User from "./components/user"


class App extends React.Component {
  render(){
    return (
      <div>
        <Parent/>
        <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
        <p className="text-center">
          {/* <button onClick={ this.props.onIncrement } className="btn btn-success">increment</button>
          <button onClick={ this.props.onDecrement } className="btn btn-info">dncrement</button> */}
          {/* <button onClick = { ()=>this.props.increment() } className="btn btn-success">increment</button>
          <button onClick = { ()=>this.props.decrement() } className="btn btn-info">dncrement</button> */}
          <button onClick = { ()=>this.props.counterActions.increment(10) } className="btn btn-success">increment</button>
          <button onClick = { ()=>this.props.counterActions.decrement(5) } className="btn btn-info">dncrement</button>
        </p>
        <User />
      </div>
    );
  }
} 

const mapStateToProps = (state) =>{
  // console.log(state);
  return{
    counter:state.counter
  }
}

// const mapDisPatchToProps = (dispatch) =>{
//   return{
//     increment : () => {dispatch(increment())},
//     decrement : () => {dispatch(decrement())}
//   }
// }

const mapDisPatchToProps = (dispatch) =>{
  return{
    counterActions:bindActionCreators(counterActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDisPatchToProps)(App)