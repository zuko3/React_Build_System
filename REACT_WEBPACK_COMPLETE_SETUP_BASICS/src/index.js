import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader";
import App from "./App.js";

let root = document.getElementById("root");
if (!root) {
  root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
}

ReactDom.render(<App />, root);
