import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userActions from "../actions/user"

class User extends React.Component {
    render() {

        const { error,isFetching ,user } = this.props.user;

        let data;

        if(error){
            data = error
        }else if(isFetching){
            data = "Loading..."
        }else{
            data = user.title
        }


        return (
            <div>
                <p>User</p>
                <p>{ data }</p>
                <button onClick={ () =>{this.props.userActions.get_user()} }>getUser</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(User)