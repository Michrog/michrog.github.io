import React, {useState} from "react";
import '../styles/SeriousSection.css'
import StateButton from './StateButton'
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

export default function SeriousSection(){
    const [seriousSection, setSeriousSection] = useState('contact')

    const section = (s) => {
        switch(s){
            case 'contact':
                return <ContactInfo/>
            case 'education':
                return <Education/>
            case 'experience':
                return <WorkExperience/>
            default: 
                return <ContactInfo/>
        }
    }

    return (
        <div>
            <div className="SeriousSectionButtons">
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
            </div>
            {section(seriousSection)}
            <hr />
        </div>
    )
}