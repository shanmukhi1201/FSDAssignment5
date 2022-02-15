import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar.js";
import Featurebox from "./Featurebox.js";
import Intro from "./Intro.js";
import "./styles.css";

const App = () => {
  return (
    <>
      <Navbar
        n1="Docs"
        n2="Tutorial"
        n3="Blog"
        n4="Community"
        n5="v17.0.2"
        n6="Languages"
        n7="Github"
      />
      <Intro />
      <Featurebox />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
