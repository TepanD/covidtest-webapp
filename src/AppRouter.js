import React from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { DiagnosisMandiriRouter } from "./routers";
import { Navbar } from "./component/Navbar";
import { HimbauanProkes } from "./views/HimbauanProkes";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./component/Footer";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/diagnosis-mandiri/:path1?" exact>
          <div
            style={{
              position: "relative",
              minHeight: "100vh",
              backgroundColor: "#D0E6FB",
              paddingBottom: "120px",
            }}
          >
            <Navbar />
            <DiagnosisMandiriRouter />
            <Footer />
          </div>
        </Route>

        <Route path="/" exact>
          <div
            style={{
              position: "relative",
              backgroundColor: "#D0E6FB",
              paddingBottom: "120px",
            }}
          >
            <Navbar />
            <HimbauanProkes />
            <Footer />
          </div>
        </Route>
        <Route path="/" exact component={HimbauanProkes} />
        <Route path="/*" render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default AppRouter;
