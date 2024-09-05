import React from "react";
import cats from "../assets/cats.json"
import '../styles/GalleryButtonCat.css'

export default function GalleryButtonCat({ cat, onHandleChangeCat, onHandleChangeImage }){

    function handleChangeCat(cat){
        onHandleChangeCat(cat)
        onHandleChangeImage(`${cat}1`)
    }

    return (
        <button className="GalleryButtonCat" onClick={() => handleChangeCat(cat.toLowerCase())}>{cats[cat].name}</button>
    )
}