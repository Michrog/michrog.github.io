import React  from "react";
import '../styles/StateSwitch.css'

export default function StateSwitch({state, states=['', ''], onChangeState, text='', width='20%'}){
    const nextState = state === states[0] ? states[1] : states[0]
    const currentClass = state === states[0] ? 'right' : 'left'
    const pelletClassName = `StateSwitchPellet ${currentClass}`

    return (
        <div 
            className="StateSwitch"
            onClick={() => onChangeState(nextState)}
            style={{
                width: width
            }}
        >
            <div className="StateSwitchFill">
                <div className={pelletClassName}>
                    <div className="StateSwitchPelletText">
                        {typeof(state) === 'string' ? `${state} ${text}` : text}
                    </div>
                </div>
            </div>
        </div>
    )
}