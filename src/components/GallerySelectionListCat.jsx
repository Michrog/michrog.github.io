import React from "react";
import '../styles/GallerySelectionListCat.css'

export default function GallerySelectionListCat({ cat, selectedImage, imageNames, onChangeImage }){

    return (
        <div className="ImageSelectionList">
        {
            imageNames.filter(image => image.match(cat)).map(image => (
                    selectedImage === image ?
                    <div
                        key={image}
                        onClick={() => onChangeImage(image)}
                        className="ImageSelectionListItem"
                        style={{
                            backgroundImage: `url(${require(`../assets/cats/${image}.jpg`)})`,
                            boxShadow: '0px 0px 3em',
                            zIndex:2
                        }}
                    >
                    </div> :
                    <div
                        key={image}
                        onClick={() => onChangeImage(image)}
                        className="ImageSelectionListItem"
                        style={{backgroundImage: `url(${require(`../assets/cats/${image}.jpg`)})`}}
                    >
                    </div> 
                )
            )
        }
        </div>
    )
}