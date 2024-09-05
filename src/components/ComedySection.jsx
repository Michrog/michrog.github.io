import React, {useState} from "react";
import CatSection from './CatSection'
import ComedySectionButton from "./ComedySectionButton";
import '../styles/ComedySection.css'

export default function ComedySection(){
    const [comedySection, setComedySection] = useState('Cat')
    let section
    switch(comedySection){
        case 'Cat':
            section = <CatSection/>
            break;
        case 'Gaming':
            section = <span>Gaming Section</span>
            break;
        default:
            section = <CatSection/>
    }
    return (
        <>
            <h1 className="Heading">Comedy section</h1>
            <div className="ComedySectionButtons">
                <ComedySectionButton section='Cat' handleChangeSection={setComedySection}/>
                <ComedySectionButton section='Gaming' handleChangeSection={setComedySection}/>
            </div>
            {section}
        </>
    )
}