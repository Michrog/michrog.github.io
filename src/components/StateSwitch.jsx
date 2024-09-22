import React, {useContext} from "react";
import '../styles/StateSwitch.css'
import { DarkmodeContext } from "./context/DarkmodeContext";
import {dmstyle, lmstyle} from '../styles/themes.js'

export default function StateSwitch({state, states=['', ''], onChangeState, text='', width='20%'}){
    const nextState = state === states[0] ? states[1] : states[0]
    const currentClass = state === states[0] ? 'right' : 'left'
    const pelletClassName = `StateSwitchPellet ${currentClass}`

    const dm = useContext(DarkmodeContext).darkMode

    return (
        <div 
            className='StateSwitch'
            onClick={() => onChangeState(nextState)}
            style={{
                width: `max(2em, ${width})`,
                backgroundColor: dm ? dmstyle.secondary : lmstyle.secondary
            }}
        >
            <div 
                className="StateSwitchFill"
                style={{
                    backgroundColor: dm ? dmstyle.accent : lmstyle.accent
                }}
            >
                <div
                    className={pelletClassName}
                    style={{
                        backgroundColor: dm ? dmstyle.main : lmstyle.main
                    }}
                >
                    <p className='StateSwitchPelletText'>
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