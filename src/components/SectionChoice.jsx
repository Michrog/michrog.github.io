import React  from "react";

export default function SectionChoice({onChangeSection}){
    return (
        <div>
            <button onClick={() => onChangeSection('serious')}>Serious section</button>
            <button onClick={() => onChangeSection('comedy')}>Comedy section</button>
        </div>
    )
}