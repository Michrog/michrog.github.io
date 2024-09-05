import React, {useState} from "react";
import Gallery from './Gallery'
import GalleryButtonCat from "./GalleryButtonCat.jsx";
import CatDescription from "./CatDescription.jsx"
import cats from "../assets/cats.json"
import '../styles/CatSection.css'

export default function CatSection(){
    const [cat, setCat] = useState('kluska')
    const [imageName, setImageName] = useState(`${cat}1`)
    
    return (
        <>
            <h1 className="CatSectionHeading">Cat section</h1>
            <div className="CatButtons">
                {Object.keys(cats).map(k => (
                    <GalleryButtonCat cat={k} onHandleChangeCat={setCat} onHandleChangeImage={setImageName}/>
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