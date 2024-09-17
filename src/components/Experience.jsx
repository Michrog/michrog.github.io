import React from "react";
import '../styles/Experience.css'
import work from '../assets/experience/work.json'
import { AsyncImage } from "loadable-image";

export default function Experience({place='nokia', imgColor='rgb(255,255,255)'}){
    const currentWork = work[place]
    const gridRes = Math.ceil(currentWork.info.length / 2)
    const gridRows = gridRes / (gridRes/2)
    const freeSpaces = ((gridRes * gridRows) - currentWork.info.length)

    return (
        <div className="Work">
            <div className="WorkHeading">
                <div 
                    style={{
                        backgroundColor: imgColor,
                        display: 'flex'
                    }}
                    className="WorkHeadingImageContainer"
                >
                    <AsyncImage 
                        src={require(`../assets/experience/work-${place}-logo.png`)}
                        style={{width:'100%',height:'100%'}}
                        loader={<div/>}
                        timeout={800}
                    />
                </div>
                <div className="WorkHeadingText">
                    <div>
                        <pre>{currentWork.name}</pre>
                        <p>{currentWork.title}</p>
                    </div>
                    <div className="WorkDurationRange">
                        <p>{currentWork.duration_range}</p>
                        <p>{currentWork.duration} years</p>
                    </div>
                </div>
            </div>
            <div 
                className="WorkInfo"
                style={{
                    gridTemplateColumns: `repeat(${gridRes}, 1fr)`
                }}
            >
                {currentWork.info.map((e, i) => {
                    return (
                        <div
                            className="WorkInfoItem"
                            key={i+1}
                            style={{
                                gridColumn: `${(i % gridRes) + 1} / ${freeSpaces > 0 && (i+1) === currentWork.info.length ? `span 2` : 'auto'}`,
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