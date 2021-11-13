import React from "react";
import AppRouter from "./AppRouter";
import "./GlobalStyling.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <AppRouter />
      </AnimatePresence>
    </>
  );
}

export default App;
