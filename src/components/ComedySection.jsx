import React, {useState} from "react";
import CatSection from './CatSection'
import StateButton from './StateButton'
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
            <div className="ComedySectionButtons">
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