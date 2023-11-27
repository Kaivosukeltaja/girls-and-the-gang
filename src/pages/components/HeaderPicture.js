import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { wrapper } from "./HeaderPicture.module.css"

const HeaderPicture = () => (
    <div className={wrapper}>
        <StaticImage 
            src="../../images/header-2.jpg" 
            alt="Girls and the Gang"
            placeholder="blurred"
        />
    </div>
)

export default HeaderPicture
