import React, {useState} from "react";
import Gallery from './Gallery'

export default function CatSection(){
    const [cat, setCat] = useState('k')
    return (
        <>
            <div>This is a <font color='purple'>cat</font> section!</div>
            <Gallery cat={cat} onChangeCat={setCat}></Gallery>
        </>
    )
}