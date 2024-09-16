import React, {useState} from "react";
import StateSwitch from "./StateSwitch";
import PageSection from './PageSection'
import '../styles/Page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Page(){
    const [section, setSection] = useState('serious')
    const [darkMode, setDarkMode] = useState(false)
    const darkModeIcon = darkMode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>

    return (
        <div className="Page">
            <hr />
            <div className="PageHead">
                <StateSwitch 
                    state={section} 
                    states={['serious', 'comedy']}
                    onChangeState={setSection}
                    text="Section"
                    width='20%'>
                </StateSwitch>
                <StateSwitch 
                    state={darkMode} 
                    states={[false, true]}
                    onChangeState={setDarkMode}
                    text={darkModeIcon}
                    width='5%'>
                </StateSwitch>
            </div>
            <hr />
            <PageSection section={section}></PageSection>
        </div>
    )
}