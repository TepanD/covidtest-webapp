import React from "react";
import "./App.css";
import { logoReact } from "../../assets";

const HalamanReact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoReact} className="App-logo" alt="logo" />
        <p>This is the beginning of covidtest-webapp</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heelo Wolrd! 
        </a>
      </header>
    </div>
  );
};

export default HalamanReact;
