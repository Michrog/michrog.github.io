import React, {useState} from "react";
import Gallery from './Gallery'
import GalleryButtonCat from "./GalleryButtonCat.jsx";

export default function CatSection(){
    const [cat, setCat] = useState('k')
    const [imageName, setImageName] = useState(`${cat}1`)
    
    return (
        <>
            <div>This is the <font color='purple'>cat</font> section!</div>
            <div className="GalleryButtons">
                <GalleryButtonCat cat='Kluska' onHandleChangeCat={setCat} onHandleChangeImage={setImageName}/>
                <GalleryButtonCat cat='Mimi' onHandleChangeCat={setCat} onHandleChangeImage={setImageName}/>
            </div>
            <Gallery 
                cat={cat} 
                onChangeCat={setCat} 
                imageName={imageName} 
                onChangeImageName={setImageName}>
            </Gallery>
        </>
    )
}