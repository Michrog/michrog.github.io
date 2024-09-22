import React, {useContext} from "react";
import '../styles/StateButton.css'
import { DarkmodeContext } from "./context/DarkmodeContext";
import {dmstyle, lmstyle} from '../styles/themes.js'

export default function ComedySectionButton({currentState='', state, onChangeState, text=''}){
    const dm = useContext(DarkmodeContext).darkMode
    const style = {
        fontWeight: currentState === state ? 'bold' : 'normal',
        backgroundColor: `${dm ? dmstyle.main : lmstyle.main}`,
        color: `${dm ? dmstyle.accent2 : lmstyle.accent2}`
    }

    return (
        <button 
            className={`StateButton`}
            onClick={() => onChangeState(state)}
            style={style}
        >
        {`${state} ${text}`}
        </button>
    )
}