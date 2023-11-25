import React from "react";
import {mainLayoutDiv } from "./MainLayout.module.css"

const MainLayout = (props) => (

    <div className={mainLayoutDiv}>
        {props.children}
    </div>

)

export default MainLayout;