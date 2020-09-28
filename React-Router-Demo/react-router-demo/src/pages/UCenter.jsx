import React from "react"

const NotFound = (props) => {
  console.log(props);
    return (
      <div>
        <p>UCenter</p>
        <p>id:{ props.match.params.id }</p>
        <p>name:{ props.match.params.name }</p>
        </div>
    )
}

export default NotFound