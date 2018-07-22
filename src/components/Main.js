import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import MusicDashboard from "./Music/MusicDashboard";
import Prime from "./Prime/Prime";
import Graph from "./Graph/Graph";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/music" component={MusicDashboard} />
      <Route path="/prime" component={Prime} />
      <Route path="/graph" component={Graph} />
    </Switch>
  </main>
);

export default Main;
