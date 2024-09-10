import React from "react";
import '../styles/ContactInfo.css'
import picture from '../assets/me.jpg'

export default function ContactInfo(){

    return (
        <div className="ContactInfo">
            <div>
                <h1>Michał Rogaliński</h1>
                <ul className="ContactList">
                    <li>Email: michal.rogalinski.1999@gmail.com</li>
                    <li>Phone: +48 600 127 558</li>
                    <li>GitHub: <a target="__blank" href="https://github.com/Michrog">https://github.com/Michrog</a></li>
                    <li>Linkedin: <a target="__blank" href="https://www.linkedin.com/in/micha%C5%82-rogali%C5%84ski-0a0374218/">https://www.linkedin.com/in/michał-rogaliński</a></li>
                </ul>
            </div>
            <div className="ContactInfoPictureContainer">
                <img src={picture} alt="lol" className="ContactInfoPicture"/>
            </div>
        </div>
    )
}