import React from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { NavLink } from 'react-router-dom'
import "./style.css"

>>>>>>> 112dd9cbcf054fab0ca7244d7ba226fbe6910d05

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
<<<<<<< HEAD
            <Link to="/">Home页面</Link>
          </li>
          <li>
            <Link to="/mine">Mine页面</Link>
          </li>
          <li>
            <Link to="/mine/ucenter">UCenter页面</Link>
=======
            <NavLink exact activeClassName="selected" activeStyle={{ color: "red" }} to="/">Home页面</NavLink>
          </li>
          <li>
            {/* <NavLink exact activeClassName="selected" to="/mine">Mine页面</NavLink> */}
            <NavLink 
              to={{
                pathname:"/mine",
                search: "?sort=name",
                hash: "#the-hash",
                state: { fromDashboard: true }
              }}
            >Mine页面</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/mine/ucenter">UCenter页面</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/demo">demo</NavLink>
>>>>>>> 112dd9cbcf054fab0ca7244d7ba226fbe6910d05
          </li>
        </ul>
      </div>
    );
  }
}
