import React, {useState} from "react";
import '../styles/SeriousSection.css'
import StateButton from './StateButton'
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
// import getAverageRGB from "../utils/getAverageRGB";
// import schools from '../assets/education/education.json'

export default function SeriousSection(){
    const [seriousSection, setSeriousSection] = useState('contact')

    // making colors is async so simply do it before the user goes to education
    // inefficient
    // const imgColors = Object.fromEntries(
    //             Object.keys(schools).map(e => {
    //                 const schoolImg = new Image()
    //                 schoolImg.src = require(`../assets/education/${e}-logo.png`)
    //                 const schoolImgRGB = getAverageRGB(schoolImg)
    //                 return [e, `rgb(${schoolImgRGB.r},${schoolImgRGB.g},${schoolImgRGB.b})`]
    //             })
    //         )

    const section = (s) => {
        switch(s){
            case 'contact':
                return <ContactInfo/>
            case 'education':
                return (
                    <>
                        {/* <Education school="pwr" imgColor={imgColors['pwr']}/> */}
                        <Education school="pwr" imgColor='rgb(137, 66, 53, 0.2)'/>
                        {/* <Education school="zsge" imgColor={imgColors['zsge']}/> */}
                        <Education school="zsge" imgColor='rgb(34, 67, 46, 0.2)'/>
                    </>
                )
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