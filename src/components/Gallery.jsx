import React, { useState } from "react";
import mod from '../modulo.js'
import GalleryButtonCat from "./GalleryButtonCat.jsx";
import '../styles/Gallery.css'

const images = require.context('../assets', true);
const imageNamesList = images.keys().map(image => (image.match('[a-z][0-9]+')[0]))

export default function Gallery({cat, onChangeCat}){
    const [imageName, setImageName] = useState(`${cat}1`)

    function handleChangeCat(cat){
        onChangeCat(cat)
        setImageName(`${cat}1`)
    }

    function handleAbsoluteChangeImage(image){
        onChangeCat(image[0])
        setImageName(`${image[0]}${image.match('[0-9]+')}`)
    }
    
    function handleChangeImage(next){
        const currentImageNameId = parseInt(imageName.match('[0-9]+')[0])
        const imageNamesListCat = imageNamesList.filter(image => image.match(cat))

        if(next){
            const nextImageName = imageNamesListCat[mod(imageNamesListCat.indexOf(cat + currentImageNameId) + 1, imageNamesListCat.length)]
            setImageName(nextImageName)
        } else {
            const previousImageName = imageNamesListCat[mod(imageNamesListCat.indexOf(cat + currentImageNameId) - 1, imageNamesListCat.length)]
            setImageName(previousImageName)
        }
    }

    return (
        <>
        <select onChange={(e) => handleAbsoluteChangeImage(e.target.value)}>
                {imageNamesList.map(image => (
                   <option value={image}>{image}</option> 
                ))}
        </select>
        <GalleryButtonCat cat='kluska' onHandleChangeCat={(e) => handleChangeCat(e)}/>
        <GalleryButtonCat cat='oczko' onHandleChangeCat={(e) => handleChangeCat(e)}/>
        <div
        className='Gallery'
        style={{backgroundImage: `url(${require(`../assets/${imageName}.jpg`)})`}}>
            <div onClick={() => handleChangeImage(false)} className='ArrowButton'>
                <b>{'<'}</b>
            </div>
            <div onClick={() => handleChangeImage(true)} className='ArrowButton' style={{right: '-0px'}}>
                <b>{'>'}</b>
            </div>
            {/* <img src={images(`${imageName}`)} alt="test" width="70%"/> */}
            {/* <img src={require(`../assets/${imageName}.jpg`)} alt="test" width="70%"/> */}
        </div>
        </>
    )
}