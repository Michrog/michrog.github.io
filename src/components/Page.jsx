import React, {useState, useContext} from "react";
import StateSwitch from "./StateSwitch";
import PageSection from './PageSection'
import '../styles/Page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { DarkmodeContext } from "./context/DarkmodeContext";
import {dmstyle, lmstyle} from '../styles/themes.js'
import copyToClipboard from "../utils/copyToClipboard.js";

export default function Page(){
    const [section, setSection] = useState('serious')
    const dm = useContext(DarkmodeContext)
    const darkModeIcon = dm.darkMode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>
    const colorTheme = dm.darkMode ? dmstyle : lmstyle

    return (
        <div className={`Page`}>
            <hr />
            <div className="PageHead">
                <StateSwitch 
                    state={section} 
                    states={['serious', 'comedy']}
                    onChangeState={setSection}
                    text="Section"
                    >
                </StateSwitch>
                <div className="ThemeColorsPanel">
                    <StateSwitch 
                        state={dm.darkMode} 
                        states={[false, true]}
                        onChangeState={dm.handleDarkMode}
                        text={darkModeIcon}
                        >
                    </StateSwitch>
                    <div 
                        className="ThemeColors"
                    >
                        {Object.keys(colorTheme).map(c => {
                            console.log(colorTheme)
                            let el
                            if(!c.includes('_half')){
                                el = 
                                <div 
                                    style={{
                                        backgroundColor: colorTheme[c],
                                        color: dm.darkMode ? 
                                            c.includes('accent') ? 'black' : 'white' : 
                                            c.includes('accent') ? 'white' : 'black'
                                    }}
                                    onClick={() => copyToClipboard(colorTheme[c])}
                                >
                                <span>copy</span>
                                </div>
                            }
                            return el
                        })}
                    </div>
                </div>
            </div>
            <hr />
            <PageSection section={section}></PageSection>
        </div>
    )
}