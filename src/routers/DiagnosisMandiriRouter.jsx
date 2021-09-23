import React from "react";
import { Route, Switch } from "react-router";
import * as DiagnosisMandiri from "../views/DiagnosisMandiri";

const DiagnosisMandiriRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={DiagnosisMandiri.StartPage} />
    </Switch>
  );
};

export default DiagnosisMandiriRouter;
