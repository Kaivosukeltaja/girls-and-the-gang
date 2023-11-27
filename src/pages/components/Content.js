import React from "react";
import { wrapper, contentDiv } from "./Content.module.css";

const Content = (props) => (
  <div className={wrapper}>
    <div className={contentDiv}>{props.children}</div>
  </div>
);

export default Content;
