import React from "react";
import { Route, Switch } from "react-router-dom";
import { HalamanReact } from "./views/HalamanReact";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={HalamanReact} />
      <Route path="/*" component={HalamanReact} />
    </Switch>
  );
};

export default AppRouter;
