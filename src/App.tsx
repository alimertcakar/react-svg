import React from "react";
import { ReactSVG } from "react-svg";
import Head from "./head.svg";

function App() {
  return (
    <div>
      İnit
      <ReactSVG src={Head} style={{ width: "100px" }}></ReactSVG>
    </div>
  );
}

export default App;
