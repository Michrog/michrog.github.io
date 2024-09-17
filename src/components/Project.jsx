import React from "react";
import '../styles/Project.css'
import projects from '../assets/projects/projects.json'
import { AsyncImage } from "loadable-image";

export default function Project({project='5gth', imgColor='rgb(255,255,255)'}){
    const currentProject = projects[project]
    const gridRes = Math.ceil(currentProject.technologies.length / 2)
    const gridRows = gridRes / (gridRes/2)
    const freeSpaces = ((gridRes * gridRows) - currentProject.technologies.length)

    return (
        <div className="Project">
            <div className="ProjectHeading">
                <div 
                    className="ProjectHeadingText"
                    style={{
                        backgroundColor: imgColor
                    }}
                >
                    <div>
                        <pre>{currentProject.name}</pre>
                        <p>
                            <a href={currentProject.github} target='__blank'>
                                {currentProject.github.replace('https://', '')}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="ProjectHeadingImageContainer">
                    <AsyncImage 
                        src={require(`../assets/projects/${project}.png`)}
                        style={{width:'75%',height:'100%'}}
                        loader={<div style={{background: imgColor}}/>}
                        timeout={800}
                    />
                </div>
            </div>
            <div className="ProjectDescriptionContainer">
                <pre>{currentProject.description}</pre>
            </div>
            <div 
                className="ProjectTechnologies"
                style={{
                    gridTemplateColumns: `repeat(${gridRes}, 1fr)`
                }}
            >
                {currentProject.technologies.map((e, i) => {
                    return (
                        <div
                            className="ProjectTechnologiesItem"
                            key={i+1}
                            style={{
                                gridColumn: `${(i % gridRes) + 1} / ${freeSpaces > 0 && (i+1) === currentProject.info.length ? `span 2` : 'auto'}`,
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