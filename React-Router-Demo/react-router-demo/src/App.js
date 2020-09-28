import React from 'react';
import Home from "./pages/Home"
import Mine from "./pages/Mine"
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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
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
      </Router>
    </div>
  );
}

export default App;
