import React from "react";
import { Route, Switch } from "react-router-dom";
import { HalamanReact } from "./views/HalamanReact";
import { DiagnosisMandiriRouter } from "./routers";
import { Navbar } from "./component/Navbar";
import { HimbauanProkes } from "./views/HimbauanProkes";
import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/diagnosis-mandiri/:path1?" exact>
          <Navbar />
          <DiagnosisMandiriRouter />
        </Route>

        <Route path="/himbauan-prokes" exact>
          <div
            style={{
              minHeight: "100vh",
              backgroundColor: "#D0E6FB",
              paddingBottom: "120px",
            }}
          >
            <Navbar />
            <HimbauanProkes />
          </div>
        </Route>
        <Route path="/*" component={HalamanReact} />
      </Switch>
    </AnimatePresence>
  );
};

export default AppRouter;
