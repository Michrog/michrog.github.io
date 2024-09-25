import React, {useState, useContext} from "react";
import CatSection from './CatSection'
import StateButton from './StateButton'
import '../styles/ComedySection.css'
import { DarkmodeContext } from "./context/DarkmodeContext";
import {dmstyle, lmstyle} from '../styles/themes.js'

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
    const dm = useContext(DarkmodeContext).darkMode
    return (
        <>
            <div 
                className="ComedySectionButtons"
                style={{
                    backgroundColor: dm ? dmstyle.secondary : lmstyle.secondary
                }}
            >
                <StateButton 
                    currentState={comedySection} 
                    state='Cat' 
                    onChangeState={setComedySection}
                    text='section'
                />
                <StateButton 
                    currentState={comedySection} 
                    state='Gaming' 
                    onChangeState={() => (true)}
                    text='section (not ready)'
                />
            </div>
            {section}
        </>
    )
}