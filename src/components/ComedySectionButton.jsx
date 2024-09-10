import React from "react";
import '../styles/ComedySectionButton.css'

export default function ComedySectionButton({currentComedySection='', section, handleChangeSection}){
    const activeStyle = {
        fontWeight: currentComedySection === section ? 'bold' : 'normal'
    }

    return (
        <button 
            className="ComedySectionButton" 
            onClick={() => handleChangeSection(section)}
            style={activeStyle}
        >
        {section} section
        </button>
    )
}