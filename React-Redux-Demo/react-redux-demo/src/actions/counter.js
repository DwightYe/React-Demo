import * as actions from "../constants/index"

// export function increment(num){
//     return{
//         type:actions.INNREMENT,
//         num
//     }
// }

export function increment(num){
    return dispatch => {
        setTimeout(() =>{
            dispatch({
                type:actions.INNREMENT,
                num
            })
        },1000)
    }
}

export function decrement(num){
    return{
        type:actions.DENREMENT,
        num
    }
}