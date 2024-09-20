import React, {useContext} from "react";
import '../styles/StateButton.css'
import { DarkmodeContext } from "./context/DarkmodeContext";

export default function ComedySectionButton({currentState='', state, onChangeState, text=''}){
    const activeStyle = {
        fontWeight: currentState === state ? 'bold' : 'normal'
    }
    const dm = useContext(DarkmodeContext)

    return (
        <button 
            className={`StateButton ${dm.darkMode ? 'dm' : 'lm'}`}
            onClick={() => onChangeState(state)}
            style={activeStyle}
        >
        {`${state} ${text}`}
        </button>
    )
}