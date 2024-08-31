import React  from "react";
import '../styles/SectionChoice.css'

export default function SectionChoice({onChangeSection}){
    return (
        <div className="SectionButtonWrapper">
            <button className="SectionButton" onClick={() => onChangeSection('serious')}>Serious section</button>
            <button className="SectionButton" onClick={() => onChangeSection('comedy')}>Comedy section</button>
        </div>
    )
}