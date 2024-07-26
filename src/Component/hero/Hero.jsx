import React from "react";
import './hero.css'
import darkarrow from '../../asset/dark-arrow.png'

function Hero(){
    return(
        <>
        <div className="hero container">
            <div className="hero-text">
                <h1>we ensure better education for a better tommorow for world </h1>
                <p>
                    our cutting edge curriculam is designer to empower students with the knowledge ,skill and experince to excel in the dynamic feild of education
                </p>
                <div className="herobtn">
                    <button className="btn">
                        explore more 
                        <img src= {darkarrow} alt="" />
                    </button>
                </div>
                    
            </div>
        </div>
        </>
       
    )
}

export default Hero