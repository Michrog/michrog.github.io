import React, {useState, useContext} from "react";
import '../styles/SeriousSection.css'
import StateButton from './StateButton'
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import { DarkmodeContext } from "./context/DarkmodeContext";
import {dmstyle, lmstyle} from '../styles/themes.js'

export default function SeriousSection(){
    const [seriousSection, setSeriousSection] = useState('contact')
    const dm = useContext(DarkmodeContext).darkMode

    const section = (s) => {
        switch(s){
            case 'contact':
                return <ContactInfo/>
            case 'education':
                return (
                    <>
                        <Education school="pwr" imgColor='rgb(137, 66, 53, 0.5)'/>
                        <Education school="zsge" imgColor='rgb(34, 67, 46, 0.5)'/>
                    </>
                )
            case 'experience':
                return (
                    <>
                        <Experience place="nokia" imgColor="rgb(171, 200, 250, 0.5)"/>
                    </>
                )
            case 'projects':
                return (
                    <>
                        <Project project='5gth' imgColor="rgb(135, 151, 139, 0.5)"/>
                        <Project project='website' imgColor="rgb(202, 242, 254, 0.5)"/>
                    </>
                )
            default: 
                return <ContactInfo/>
        }
    }

    return (
        <div>
            <div className="SeriousSectionButtonsContainer">
                <div 
                    className="SeriousSectionButtons"
                    style={{
                        backgroundColor: dm ? dmstyle.secondary : lmstyle.secondary
                    }}
                >
                    <StateButton 
                        currentState={seriousSection} 
                        state='contact' 
                        onChangeState={setSeriousSection}
                    />
                    <StateButton 
                        currentState={seriousSection} 
                        state='education' 
                        onChangeState={setSeriousSection}
                    />
                    <StateButton 
                        currentState={seriousSection} 
                        state='experience' 
                        onChangeState={setSeriousSection}
                    />
                    <StateButton 
                        currentState={seriousSection} 
                        state='projects' 
                        onChangeState={setSeriousSection}
                    />
                </div>
            </div>
            {section(seriousSection)}
            <hr />
        </div>
    )
}