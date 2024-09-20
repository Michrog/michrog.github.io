import React, {useContext} from "react";
import '../styles/StateSwitch.css'
import { DarkmodeContext } from "./context/DarkmodeContext";

export default function StateSwitch({state, states=['', ''], onChangeState, text='', width='20%'}){
    const nextState = state === states[0] ? states[1] : states[0]
    const currentClass = state === states[0] ? 'right' : 'left'
    const pelletClassName = `StateSwitchPellet ${currentClass}`

    const dm = useContext(DarkmodeContext)

    return (
        <div 
            className={`StateSwitch ${dm.darkMode ? '' : ''}`}
            onClick={() => onChangeState(nextState)}
            style={{
                width: `max(2em, ${width})`
            }}
        >
            <div className="StateSwitchFill">
                <div className={`${pelletClassName} ${dm.darkMode ? 'dm_bg' : 'lm_bg'}`}>
                    <p className={`StateSwitchPelletText ${dm.darkMode ? 'dm_text' : 'lm_bg'}`}>
                        {
                            typeof(state) === 'string' ? 
                            `${state} ${text}` :
                            text
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}