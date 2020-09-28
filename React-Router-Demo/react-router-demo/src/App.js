import React from 'react';
import Home from "./pages/Home"
import Mine from "./pages/Mine"
<<<<<<< HEAD
// import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from "./components/nav/index"
import UCnter from "./pages/UCenter"
=======
// import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom'
import { HashRouter as Router, Route ,Switch,Redirect } from 'react-router-dom'
import Nav from "./components/nav/index"
import UCnter from "./pages/UCenter"
import NotFound from "./pages/NotFound"
import Demo from "./pages/Demo"
import Shop from "./pages/Shop"
import Book from "./pages/Book"
import WebBook from "./pages/WebBook"
import JavaBook from "./pages/JavaBook"
>>>>>>> 112dd9cbcf054fab0ca7244d7ba226fbe6910d05

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
<<<<<<< HEAD
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/mine" component={ Mine }></Route>
        <Route path="/mine/ucenter" component={ UCnter }></Route>
=======
        <Switch>
          <Redirect from='/hellomine' to='/mine' />
          <Route strict exact path="/" component={ Home }></Route>
          <Route strict exact path="/mine" component={ Mine }></Route>
          <Route strict exact path="/mine/ucenter/:id?/:name?" component={ UCnter }></Route>
          {/* <Route path="/demo" render={ () => <div>Hello Demo</div> }></Route> */}
          <Route path="/demo" render={ (props) => <Demo {...props} name="你好"/>}></Route>
          <Route strict exact path="/shop" component={ Shop }></Route>
          {/* <Route strict exact path="/book" component={ Book }></Route> */}
          <Book>
            <Switch>
              <Route path="/book/webbook" component={ WebBook }></Route>
              <Route path="/book/javabook" component={ JavaBook }></Route>
            </Switch>
          </Book>
          <Route component={ NotFound }></Route>+
        </Switch>
>>>>>>> 112dd9cbcf054fab0ca7244d7ba226fbe6910d05
      </Router>
    </div>
  );
}

export default App;
