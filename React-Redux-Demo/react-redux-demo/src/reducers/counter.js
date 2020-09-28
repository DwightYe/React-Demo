import * as actions from "../constants/index"

const counter = ( state = 0,action ) =>{
    switch(action.type){
        case actions.INNREMENT:
            //throw new Error("error reducer")
            return state + action.num; 
        case actions.DENREMENT:
            return state - action.num; 
        default :
            return state;
    }
}

export default counter;