import React from 'react';
import Demo1 from "./components/Demo1/parent"
import Home from "./components/Home"
import { HashRouter , Route , Switch } from "react-router-dom"



function App() {
  return (
    <HashRouter>
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={Demo1} path="/demo1" exact></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
