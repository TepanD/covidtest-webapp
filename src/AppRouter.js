import React from "react";
import { Route, Switch } from "react-router-dom";
import { HalamanReact } from "./views/HalamanReact";
import { DiagnosisMandiriRouter } from "./routers";

const AppRouter = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={HalamanReact} /> */}
      <Route path="/diagnosis-mandiri/:path1?" exact>
        <DiagnosisMandiriRouter />
      </Route>
      <Route path="/*" component={HalamanReact} />
    </Switch>
  );
};

export default AppRouter;
