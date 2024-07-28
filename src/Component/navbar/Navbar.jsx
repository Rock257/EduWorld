import React, { useEffect, useState } from 'react'
import './navbar.css'
import Logo from  '../../asset/logo.png'

export default function Navbar() {

  const[sticky ,setsticky] =useState(false) ;

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setsticky(true) :setsticky(false)
    })
  },[])

  return (
    <nav className={`container  ${sticky? 'dark-nav' :""}`}>
        <img src={Logo} alt="" />

        <ul>
            <li>Home</li>
            <li>Programe</li>
            <li>About Us</li>
            <li>Campus</li> 
            <li>Testimonials</li>
            <li> <button className='btn'> Contact Us</button></li>
        </ul>

    </nav>
  )
}
