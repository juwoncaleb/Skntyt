import React from 'react'
import '../Home/style.css'
import Header from "../../component/Header/index";
import BackgroundVideo from "../../component/backgroundVideo/backgroundVideo";
import Content from "../../component/content/content";
function Home() {
    return (
        <div>
            <Header/>
             <BackgroundVideo/> 
             <Content/>
        
        </div>
    )
}

export default Home
