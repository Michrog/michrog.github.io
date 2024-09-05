import React from "react";
import cats from "../assets/cats.json"
import '../styles/catDescription.css'

export default function CatDescription({cat}){
    const currentCat = cats[cat]
    //attributes order: power, speed, range, durability, precision, potential

    function baseHexPoints(r, h, w){
        const points = new Array(6)
        for (let i = 0; i < points.length; i++){
            const angle = (Math.PI / 180) * (60 * i - 30)
            points[i] = [
                w/2 + r * Math.cos(angle),
                h/2 + r * Math.sin(angle)
            ]
        }
        return points.map((p) => p.join(',')).join(' ')
    }

    function catHexPoints(r, h, w, attr){
        const points = new Array(6)
        for (let i = 0; i < points.length; i++){
            const angle = ((Math.PI / 180) * (60 * i - 30))
            points[i] = [
                w/2 + r * (attr[i]/6) * Math.cos(angle),
                h/2 + r * (attr[i]/6) * Math.sin(angle)
            ]
        }
        return points.map((p) => p.join(',')).join(' ')
    }
    const basePoints = baseHexPoints(10, 100, 100)
    const catPoints = catHexPoints(10, 100, 100, currentCat.attributes)

    return (
        <div className="catDescriptionWrapper">
            <div className="catDescriptionVerbose">
                <div>
                    <h2>{currentCat.name}</h2>
                    <p className="verboseDesc">{currentCat.description}</p>
                    Traits:
                    <ul>
                    {
                        currentCat.traits.map(e => (
                            <li key={e}>{`${e}`}</li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            <div className="catDescriptionChart">
                <svg
                    style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '500px',
                        zIndex: -10
                    }}
                    viewBox="37.5 37.5 25 25"
                    // viewBox="0 0 100 100"
                    >
                    <polygon className="chartPoly"
                        points={basePoints} 
                        fill='white' 
                        stroke='black' 
                        strokeWidth='0.5px'
                        fillOpacity={0}
                    />
                    <polygon className="chartPolyCat"
                        points={catPoints} 
                        stroke='red' 
                        strokeWidth='0.5px'
                        fillOpacity={0}
                    />
                    <line className="chartLine power"
                        x1="50" 
                        x2="58.66025403784439" 
                        y1="50" 
                        y2="45"
                    />
                    <text x="58.66025403784439" y="45" fontSize='1.5' fill="red">Power</text>
                    <line className="chartLine speed"
                        x1="50" 
                        x2="58.66025403784439" 
                        y1="50" 
                        y2="55"
                    />
                    <text x="58.66025403784439" y="55" fontSize='1.5' fill='gold'>Speed</text>
                    <line className="chartLine range"
                        x1="50" 
                        x2="50" 
                        y1="50" 
                        y2="60"
                    />
                    <text x="50" y="60" fontSize='1.5' fill='green'>Range</text>
                    <line className="chartLine durability"
                        x1="50" 
                        x2="41.33974596215561" 
                        y1="50" 
                        y2="55"
                    />
                    <text x="41.33974596215561" y="55" fontSize='1.5' fill='blue'>Durability</text>
                    <line className="chartLine precision"
                        x1="50" 
                        x2="41.33974596215561" 
                        y1="50" 
                        y2="45"
                    />
                    <text x="41.33974596215561" y="45" fontSize='1.5' fill='cyan'>Precision</text>
                    <line className="chartLine potential"
                        x1="50" 
                        x2="50" 
                        y1="50" 
                        y2="40"
                    />
                    <text x="50" y="40" fontSize='1.5' fill='purple'>Potential</text>
                </svg>
            </div>
        </div>
    )
}