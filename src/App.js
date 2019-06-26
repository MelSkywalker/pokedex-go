import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Individual from "./Components/Individual";
import Error from "./Components/Error";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pokemon" component={Individual} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
