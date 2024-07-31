import React from "react";
import './contact.css'
import Mail from '../../asset/mail-icon.png'
import Message from '../../asset/msg-icon.png'
import Phone from '../../asset/phone-icon.png'
import Location from '../../asset/location-icon.png'

function Contact(props){
    return(
        <>
        <div className="main container">
            <h3>{props.title}</h3>
            <h1>{props.subtitle}</h1>
            <div className="contact">
                <div className="contact-left">
                    <h3>Sent Us Messsage <img src={Message}alt="" /></h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquam voluptate illum, dolores, facere exercitationem odio deleniti inventore architecto optio eligendi, eum animi ad natus sed repellendus cumque libero numquam! Nisi laborum sit, praesentium quis incidunt ad soluta, laboriosam fugit minus voluptatibus necessitatibus molestiae fugiat earum dolor eum nostrum ea.</p>
                    <ul>
                        <li><img src={Phone} alt="" />9989524948</li>
                        <li><img src={Mail}alt="" />query@eduworld.com</li>
                        <li><img src={Location} alt="" />35Ba Lucifer Road ,Newyork,USA(412616)</li>
                    </ul>
                </div>
                <div className="contact-right">
                    <form action="">
                        <label htmlFor="fullname">Name</label>
                        <input type="text" />
                        <label htmlFor="fullname">Name</label>
                        <input type="text" />
                        <label htmlFor="fullname">Name</label>
                        <input type="text" />
                        <label htmlFor="fullname">Name</label>
                        <input type="text" />
                        <label htmlFor="fullname">Name</label>
                        <input type="text" />
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;