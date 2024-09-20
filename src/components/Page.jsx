import React, {useState, useContext} from "react";
import StateSwitch from "./StateSwitch";
import PageSection from './PageSection'
import '../styles/Page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { DarkmodeContext } from "./context/DarkmodeContext";

export default function Page(){
    const [section, setSection] = useState('serious')
    const dm = useContext(DarkmodeContext)
    const darkModeIcon = dm.darkMode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>

    return (
        <div className={`Page ${dm.darkMode ? '' : ''}`}>
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
                    state={dm.darkMode} 
                    states={[false, true]}
                    onChangeState={dm.handleDarkMode}
                    text={darkModeIcon}
                    width='5%'>
                </StateSwitch>
            </div>
            <hr />
            <PageSection section={section}></PageSection>
        </div>
    )
}