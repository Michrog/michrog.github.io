import React, { useRef } from "react";
import mod from '../utils/modulo.js'
import boundary from "../utils/boundary.js";
import GallerySelectionListCat from "./GallerySelectionListCat"
import '../styles/Gallery.css'

const images = require.context('../assets/cats', false, /.*?\.jpg/, 'sync');
const imageNamesList = images.keys().map(image => (image.match('[a-z]+[0-9]+')[0]))

export default function Gallery({cat, imageName, onChangeImageName, onChangeCat}){
    const galleryScreenRef = useRef(null)

    function handleAbsoluteChangeImage(image){
        onChangeCat(image.match('[a-z]+'))
        onChangeImageName(`${image.match('[a-z]+')}${image.match('[0-9]+')}`)
    }
    
    function handleChangeImage(next){
        const currentImageNameId = parseInt(imageName.match('[0-9]+')[0])
        const imageNamesListCat = imageNamesList.filter(image => image.match(cat))

        if(next){
            const nextImageName = imageNamesListCat[mod(imageNamesListCat.indexOf(cat + currentImageNameId) + 1, imageNamesListCat.length)]
            onChangeImageName(nextImageName)
        } else {
            const previousImageName = imageNamesListCat[mod(imageNamesListCat.indexOf(cat + currentImageNameId) - 1, imageNamesListCat.length)]
            onChangeImageName(previousImageName)
        }
    }

    function handleDragImage(e){
        const {
            offsetTop: top, 
            offsetLeft: left, 
            style: s, 
            offsetWidth: width, 
            offsetHeight: height
        } = galleryScreenRef.current
        const horizontal = 100 * (e.clientX - left + window.scrollX) / width
        const vertical = 100 * (e.clientY - top + window.scrollY) / height
        s.backgroundPositionX = boundary(0, 100, horizontal) + "%"
        s.backgroundPositionY = boundary(0, 100, vertical) + "%"
    }

    function handleTouchImage(e){
        const {
            offsetTop: top, 
            offsetLeft: left, 
            style: s, 
            offsetWidth: width, 
            offsetHeight: height
        } = galleryScreenRef.current
        galleryScreenRef.current.children[0].style.width = 0
        galleryScreenRef.current.children[0].style.fontSize = 0
        galleryScreenRef.current.children[1].style.width = 0
        galleryScreenRef.current.children[1].style.fontSize = 0

        const horizontal = 100 * (e.touches[0].clientX - left + window.scrollX) / width
        const vertical = 100 * (e.touches[0].clientY - top + window.scrollY) / height
        s.backgroundPositionX = boundary(0, 100, horizontal) + "%"
        s.backgroundPositionY = boundary(0, 100, vertical) + "%"
    }

    function handleChangeImageSize(e){
        const {style: s} = galleryScreenRef.current
        s.backgroundSize = `${e.target.value}%`
    }

    return (
        <div className="Gallery">
            <input className="GallerySizeSlider" type="range" onChange={(e) => handleChangeImageSize(e)} />
            <div
                ref={galleryScreenRef}
                className='GalleryScreen'
                draggable
                onDragStart={(e) => {
                    const n = new Image()
                    n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                    e.dataTransfer.setDragImage(n, 0, 0)
                }}
                onDrag={handleDragImage}
                onDragEnd={handleDragImage}
                onTouchMove={handleTouchImage}
                onTouchEnd={() => {
                    galleryScreenRef.current.children[0].style.width = '15%'
                    galleryScreenRef.current.children[0].style.fontSize = '2em'
                    galleryScreenRef.current.children[1].style.width = '15%'
                    galleryScreenRef.current.children[1].style.fontSize = '2em'
                }}
                style={
                    {
                        backgroundImage: `url(${require(`../assets/cats/${imageName}.jpg`)})`
                    }
                }>
                <div onClick={() => handleChangeImage(false)} className='ArrowButton'>
                    <b>{'<'}</b>
                </div>
                <div onClick={() => handleChangeImage(true)} className='ArrowButton' style={{right: '-0px'}}>
                    <b>{'>'}</b>
                </div>
            </div>
            <GallerySelectionListCat cat={cat} selectedImage={imageName} imageNames={imageNamesList} onChangeImage={handleAbsoluteChangeImage}></GallerySelectionListCat>
        </div>
    )
}