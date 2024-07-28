import React from "react";
import './campus.css'
import Gal1 from  "../../asset/gallery-1.png"
import Gal2 from  "../../asset/gallery-2.png"
import Gal3 from  "../../asset/gallery-3.png"
import Gal4 from  "../../asset/gallery-4.png"




function Campus(props){
    return(
        <>
       
            <div className="campus container">
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <div className="gallery">
                    <img src={Gal1} alt="" />
                    <img src={Gal2} alt="" />
                    <img src={Gal3} alt="" />
                    <img src={Gal4} alt="" />
                    
                </div>
            </div>
        </>
    )
}

export default Campus;