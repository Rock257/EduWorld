import React, { useRef } from "react";
import "./testimonial.css";
import Previous from "../../asset/back-icon.png";
import Next from "../../asset/next-icon.png";
import U1 from "../../asset/user-1.png";
import U2 from "../../asset/user-2.png";
import U3 from "../../asset/user-3.png";
import U4 from "../../asset/user-4.png";

export default function Testimonials(props) {


  const slider = useRef();
  let tx  = 0 ;

  const slideForward = ()=>{
    if(tx >-50){
      // tx =tx -25
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward =()=>{
    if(tx< 0){
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  return (
    <div className="testimonials container">
      <header>
        <h3>{props.title}</h3>
        <h1>{props.subtitle}</h1>
      </header>

      <div className="testimony">
        <img src={Previous} alt="" className="prev-btn" onClick={()=>slideBackward()}/>
        <img src={Next} alt="" className="next-btn" onClick={()=>slideForward()}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={U1} alt="" />
                  <div className="">
                    <h3>Willaim 1</h3>
                    <span>Eduorld ,USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde doloremque quo eos non inventore, ad sit voluptatibus aliquid et maxime rerum cumque aperiam incidunt quod officia necessitatibus iure delectus.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={U2}alt="" />
                  <div className="">
                    <h3>Willaim 2</h3>
                    <span>Eduorld ,USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde doloremque quo eos non inventore, ad sit voluptatibus aliquid et maxime rerum cumque aperiam incidunt quod officia necessitatibus iure delectus.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={U3} alt="" />
                  <div className="">
                    <h3>Willaim 3</h3>
                    <span>Eduorld ,USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde doloremque quo eos non inventore, ad sit voluptatibus aliquid et maxime rerum cumque aperiam incidunt quod officia necessitatibus iure delectus.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={U4} alt="" />
                  <div className="">
                    <h3>Willaim 4</h3>
                    <span>Eduorld ,USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde doloremque quo eos non inventore, ad sit voluptatibus aliquid et maxime rerum cumque aperiam incidunt quod officia necessitatibus iure delectus.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
