import React from 'react'
import './about.css'
import AboutImage from  '../../asset/about.png'
import AboutIcon from  '../../asset/play-icon.png'

export default function About() {
  return (
    <div className='about container'>
        <div className="about-left">
          <img src={AboutImage} alt=""className='about-img' />
          <img src={AboutIcon} alt="" className='about-icon'/>

        </div>
        <div className="about-right">
          <h3>about univercity</h3>
          <h2>nurturing tomorrow's leader today</h2>
          <p> 
          For over 70 years, the University of New England has been a leader in providing distance education to students throughout Australia and the world.
          <br />
          UNE was formed in 1938 as the New England University College, a College of the University of Sydney. The University became fully independent in 1954 and pioneered teaching to external students by correspondence, making UNE Australia's most experienced provider of distance and now online education.
          </p>
        </div>
    </div>
  )
}
