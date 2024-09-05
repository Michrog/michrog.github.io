import React from "react";
import '../styles/ComedySectionButton.css'

export default function ComedySectionButton({section, handleChangeSection}){
    return (
        <button className="ComedySectionButton" onClick={() => handleChangeSection(section)}>{section} section</button>
    )
}