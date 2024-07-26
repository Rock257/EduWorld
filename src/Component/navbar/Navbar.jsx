import React from 'react'
import './navbar.css'
import Logo from  '../../asset/logo.png'

export default function Navbar() {
  return (
    <nav>
        <img src={Logo} alt="" />

        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Programe</li>
            <li>Campus</li> 
            <li>Testimonials</li>
            <li>Contact Us</li>
        </ul>

    </nav>
  )
}
