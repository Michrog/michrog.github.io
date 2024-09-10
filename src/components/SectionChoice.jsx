import React  from "react";
import '../styles/SectionChoice.css'

export default function SectionChoice({section='serious', onChangeSection}){
    const nextSection = section === 'serious' ? 'comedy' : 'serious'
    const pelletClassName = `SectionSwitchPellet ${section}`

    return (
        <div 
            className="SectionSwitch"
            onClick={() => onChangeSection(nextSection)}
        >
            <div className="SectionSwitchFill">
                <div className={pelletClassName}>
                    <div className="SectionSwitchPelletText">{section} section</div>
                </div>
            </div>
        </div>
    )
}