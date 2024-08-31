import React from "react";
import '../styles/GalleryButtonCat.css'

export default function GalleryButtonCat({ cat, onHandleChangeCat }){
    return (
        <button className="GalleryButtonCat" onClick={() => onHandleChangeCat(cat[0].toLowerCase())}>{cat}</button>
    )
}