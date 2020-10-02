import React from "react"
import querystring from "querystring"
import MyDemo from "./MineDemo"

const Mine = (props) =>{
    // const params = new URLSearchParams(props.location.search)
    // console.log(params.get("name"));
    // console.log(params.get("age"));

    const value = querystring.parse(props.location.search)
    console.log(value);

    const clickHandle = () =>{
        console.log(props);
        //push是叠加的 repalce是替换 上一次页面不存在了
        // props.history.push("/")
        props.history.replace("/")
    }

    return(
        <div>
            <p>Mine</p>
            <button onClick = { clickHandle }>回到Home页面</button>
            <MyDemo />
        </div>
    )
}

export default Mine
