import React from "react";

export default function GalleryButtonCat({ cat, onHandleChangeCat }){
    return (
        <button onClick={() => onHandleChangeCat(cat[0])}>{cat}</button>
    )
}