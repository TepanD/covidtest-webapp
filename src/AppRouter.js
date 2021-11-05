import React from "react";
import { Route, Switch } from "react-router-dom";
import { HalamanReact } from "./views/HalamanReact";
import { DiagnosisMandiriRouter } from "./routers";
import { Navbar } from "./component/Navbar";

const AppRouter = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={HalamanReact} /> */}
      <Route path="/diagnosis-mandiri/:path1?" exact>
        <div style={{ minHeight: "100vh", backgroundColor: "#D0E6FB" }}>
          <Navbar />
          <DiagnosisMandiriRouter />
        </div>
      </Route>
      <Route path="/*" component={HalamanReact} />
    </Switch>
  );
};

export default AppRouter;
