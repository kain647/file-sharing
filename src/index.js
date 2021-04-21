import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import File from "./file-sharing";

const previews = [{ time: `10:36` }, { time: `5:12` }, { time: `12:20` }];
ReactDOM.render(
  <React.StrictMode>
    <File previews={previews} />
  </React.StrictMode>,
  document.getElementById("root")
);
