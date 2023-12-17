import React from "react"

import { video } from "./VideoClip.module.css"

const VideoClip = () => (
    <iframe 
        src="https://www.youtube.com/embed/ueR2LDlRa5c?si=lpRb3nTM9cn6MDyi"
        title="Girls and the Gang - Medley"
        className={video}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
)

export default VideoClip;

