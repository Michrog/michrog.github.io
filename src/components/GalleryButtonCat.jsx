import React from "react";
import cats from "../assets/cats.json"
import '../styles/GalleryButtonCat.css'

export default function GalleryButtonCat({ currentCat='', cat, onHandleChangeCat, onHandleChangeImage }){
    const activeStyle = {
        fontWeight: currentCat === cat ? 'bold' : 'normal'
    }

    function handleChangeCat(cat){
        onHandleChangeCat(cat)
        onHandleChangeImage(`${cat}1`)
    }

    return (
        <button 
            className="GalleryButtonCat" 
            onClick={() => handleChangeCat(cat.toLowerCase())}
            style={activeStyle}
        >
        {cats[cat].name}
        </button>
    )
}