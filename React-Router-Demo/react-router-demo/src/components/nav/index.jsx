import React from "react";
import { NavLink } from 'react-router-dom'
import "./style.css"


export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
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
          </li>
        </ul>
      </div>
    );
  }
}
