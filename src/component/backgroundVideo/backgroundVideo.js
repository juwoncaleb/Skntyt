import React from 'react'
import "../backgroundVideo/style.css"
import video from "../video/video.mp4";

function BackgroundVideo() {
    return (
        <div className="App">
            <video autoPlay loop muted>
            <source src={video} type="video/mp4"/>
            </video>
        </div>
        
    )
}

export default BackgroundVideo
