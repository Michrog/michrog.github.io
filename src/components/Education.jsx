import React, {useContext} from "react";
import '../styles/Education.css'
import schools from '../assets/education/education.json'
import { AsyncImage } from "loadable-image";
import { DarkmodeContext } from "./context/DarkmodeContext";

export default function Education({school='pwr', imgColor='rgb(255,255,255)'}){
    const currentSchool = schools[school]
    const gridRes = Math.ceil(currentSchool.info.length / 2)
    const gridRows = gridRes / (gridRes/2)
    const freeSpaces = ((gridRes * gridRows) - currentSchool.info.length)

    const darkMode = useContext(DarkmodeContext)

    return (
        <div className="Education">
            <div className="EducationHeading">
                <div 
                    style={{
                        backgroundColor: imgColor,
                        display: 'flex'
                    }}
                    className="EducationHeadingImageContainer"
                >
                    <AsyncImage 
                        src={require(`../assets/education/${school}-logo.png`)}
                        style={{width:'100%',height:'100%'}}
                        loader={<div/>}
                        timeout={800}
                    />
                </div>
                <div className="EducationHeadingText">
                    <div>
                        <pre>{currentSchool.name}</pre>
                        <p>{currentSchool.title}</p>
                    </div>
                    <div className="EducationDurationRange">
                        <p>{currentSchool.duration_range}</p>
                        <p>{currentSchool.duration} years</p>
                    </div>
                </div>
            </div>
            <div 
                className="EducationInfo"
                style={{
                    gridTemplateColumns: `repeat(${gridRes}, 1fr)`
                }}
            >
                {currentSchool.info.map((e, i) => {
                    return (
                        <div
                            className="EducationInfoItem"
                            key={i+1}
                            style={{
                                gridColumn: `${(i % gridRes) + 1} / ${freeSpaces > 0 && (i+1) === currentSchool.info.length ? `span 2` : 'auto'}`,
                                backgroundColor: imgColor
                            }}
                        >
                            <pre>{e}</pre>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}