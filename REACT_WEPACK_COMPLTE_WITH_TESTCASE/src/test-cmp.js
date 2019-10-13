import React, { Component } from "react";
import "./style/style.css";
import imageurl from "./images/logo.png";

export const TestCmp = props => (
  <h3>
    <img
      src={imageurl}
      style={{
        height: 40,
        width: 40
      }}
    />
    <p> I am th test component</p>
  </h3>
);
