import React from "react";
import "./program.css";
import P1 from "../../asset/program-1.png";
import P2 from "../../asset/program-2.png";
import P3 from "../../asset/program-3.png";
import PI1 from "../../asset/program-icon-1.png";
import PI2 from "../../asset/program-icon-2.png";
import PI3 from "../../asset/program-icon-3.png";

function Program(props) {
  return (
    <>
      <div className="main">
        <div className="title">
          <h3>{props.subtitle}</h3>
          <p>{props.title}</p>
        </div>

        <div className="programs">
          <div className="program">
            <img src={P1} alt="" />
            <div className="caption">
              <img src={PI1} alt="" />
              <p>Bechlor Degree</p>
            </div>
          </div>
          <div className="program">
            <img src={P2} alt="" />
            <div className="caption">
              <img src={PI2} alt="" />
              <p> Master Degree</p>
            </div>
          </div>
          <div className="program">
            <img src={P3} alt="" />
            <div className="caption">
              <img src={PI3} alt="" />
              <p> PHD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
