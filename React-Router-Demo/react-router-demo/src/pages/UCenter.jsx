<<<<<<< HEAD
import React from "react";

export default class UCenter extends React.Component {
  render() {
    return (
      <div>
           UCenter
      </div>
    );
  }
}
=======
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
>>>>>>> 112dd9cbcf054fab0ca7244d7ba226fbe6910d05
