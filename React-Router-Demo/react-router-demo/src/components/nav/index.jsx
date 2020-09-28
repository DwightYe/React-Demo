import React from "react";
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home页面</Link>
          </li>
          <li>
            <Link to="/mine">Mine页面</Link>
          </li>
          <li>
            <Link to="/mine/ucenter">UCenter页面</Link>
          </li>
        </ul>
      </div>
    );
  }
}
