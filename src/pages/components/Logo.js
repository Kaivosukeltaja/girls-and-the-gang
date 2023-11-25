import React from "react";
import LogoSvg from "../../images/gg-logo.inline.svg"
import { logo } from "./Logo.module.css"

const Logo = () => (
    <a href="/">
        <LogoSvg className={logo} />
    </a>
)

export default Logo;