import React from "react";
import logo from "../Images/BrainFlix-logo.svg";
import headerPic from "../Images/Mohan-muruge.jpg";
import icon from "../Images/upload.svg";
import Videos from "../Data/videos.json";

function Header(){
    return (


        <header>
            <div className="logo-container">
                <img src={logo}/>
            </div>

            <div className="search-container">
                <div className="seatch-continer-inputs">
                    <input type={"text"} placeholder={"Search"} className="search-bar"/>
                    <button className="hero-btn1 search-btn"> <img src={icon} alt="icon"/> Upload</button>
                </div>
                <span className="search-container-image"> <img src={headerPic}/> </span>
            </div>
        </header>
    )
}

export default Header 