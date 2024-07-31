import React from 'react'
import Navbar from './Component/navbar/Navbar'
import Hero from './Component/hero/Hero'
import Program from './Component/programs/Program'
import About from './Component/about/About'
import Campus from './Component/campus/Campus'
import Testimonials from './Component/testimonial/Testimonials'
import Contact from './Component/contact/Contact'

export default function 
() {
  return (
    <>
    <Navbar/>
    <Hero/>

    <div className="container">
      
      <Program title = 'what we offer' subtitle = "Our Programs"/>
    </div>
    <About/>
    <Campus title = "gallery" subtitle = 'campus Photos'/>
    <Testimonials title ="Testimonial" subtitle ="What Student Say " />
    <Contact title ="Contact" subtitle ="Get In Touch "/>

    </>
  )
}
