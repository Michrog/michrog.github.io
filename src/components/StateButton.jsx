import React from "react";
import '../styles/StateButton.css'

export default function ComedySectionButton({currentState='', state, onChangeState, text=''}){
    const activeStyle = {
        fontWeight: currentState === state ? 'bold' : 'normal'
    }

    return (
        <button 
            className="StateButton" 
            onClick={() => onChangeState(state)}
            style={activeStyle}
        >
        {`${state} ${text}`}
        </button>
    )
}