import React, {useState, useContext} from "react";
import Gallery from './Gallery'
import StateButton from './StateButton'
import CatDescription from "./CatDescription.jsx"
import cats from "../assets/cats/cats.json"
import '../styles/CatSection.css'
import { DarkmodeContext } from "./context/DarkmodeContext";
import {dmstyle, lmstyle} from '../styles/themes.js'

export default function CatSection(){
    const [cat, setCat] = useState('kluska')
    const [imageName, setImageName] = useState(`${cat}1`)
    
    const dm = useContext(DarkmodeContext).darkMode

    function handleChangeCat(cat){
        setCat(cat)
        setImageName(`${cat}1`)
    }
    
    return (
        <>
            <div 
                className="CatButtons"
                style={{
                    backgroundColor: dm ? dmstyle.secondary : lmstyle.secondary
                }}
            >
                {Object.keys(cats).map(k => (
                    <StateButton 
                        currentState={cat} 
                        state={k} 
                        onChangeState={handleChangeCat}
                    />
                ))}
            </div>
            <CatDescription cat={cat}/>
            <Gallery 
                cat={cat} 
                onChangeCat={setCat} 
                imageName={imageName} 
                onChangeImageName={setImageName}>
            </Gallery>
        </>
    )
}