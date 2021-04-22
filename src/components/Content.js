import React from "react";
import { Switch, Route } from "react-router-dom";


import Jobs from "../pages/Jobs"

const Content = () => (
  <div className="wrapper">
    <Switch>
      <Route exact path="/" component={() => <Jobs/>} />
    </Switch>
  </div>
);

export default Content;
