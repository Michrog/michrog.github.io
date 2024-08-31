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
                            backgroundImage: `url(${require(`../assets/${image}.jpg`)})`,
                            boxShadow: '0px 0px 3em purple',
                            zIndex:2
                        }}
                    >
                    </div> :
                    <div
                        key={image}
                        onClick={() => onChangeImage(image)}
                        className="ImageSelectionListItem"
                        style={{backgroundImage: `url(${require(`../assets/${image}.jpg`)})`}}
                    >
                    </div> 
                )
            )
        }
        </div>
    )
}