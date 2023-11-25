import React from "react"

import { bar } from "./TopBar.module.css"
import Logo from "./Logo";

const TopBar = () => (
    <nav className={bar}>
        <Logo />
    </nav>
)

export default TopBar;