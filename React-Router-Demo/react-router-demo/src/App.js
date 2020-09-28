import React from 'react';
import Home from "./pages/Home"
import Mine from "./pages/Mine"
// import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from "./components/nav/index"
import UCnter from "./pages/UCenter"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/mine" component={ Mine }></Route>
        <Route path="/mine/ucenter" component={ UCnter }></Route>
      </Router>
    </div>
  );
}

export default App;
