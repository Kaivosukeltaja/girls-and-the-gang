import React from "react";
import { contentDiv } from "./Content.module.css";



const Content = (props) => (

    <div className={contentDiv}>
        {props.children}
    </div>
);


export default Content;