import React from "react";
import '../styles/GalleryButtonCat.css'

export default function GalleryButtonCat({ cat, onHandleChangeCat, onHandleChangeImage }){

    function handleChangeCat(cat){
        onHandleChangeCat(cat)
        onHandleChangeImage(`${cat}1`)
    }

    return (
        <button className="GalleryButtonCat" onClick={() => handleChangeCat(cat[0].toLowerCase())}>{cat}</button>
    )
}