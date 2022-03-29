import React, {useState}  from "react";
import './Gallery.css';

export default function Gallery(props){

    const [positionToDisplay , setPositionToDisplay]=useState(0);

    
    const handlePrevious = () => {
        setPositionToDisplay(positionToDisplay-1);
    }

    const handleNext = () => {
        setPositionToDisplay(positionToDisplay+1);
    }
    
   let imageToDisplay;
    // on masque toutes les images sauf celle à la position "positionToDisplay"
    for (var i = 0; i < props.pictures.length; i++) {
        if(i === positionToDisplay){
            imageToDisplay = <img src={props.pictures[i]} alt="presentation location" className="imageGallery"></img>
        }
    }

    return (
        <div className="gallery">
            { positionToDisplay !== 0 ? <p id="prev" class="prev" onClick={handlePrevious} aria-label="Previous image">&#10094;</p> : ""}
            { positionToDisplay !== props.pictures.length-1 ? <p id="next" class="next" onClick={handleNext} aria-label="Next image">&#10095;</p>: ""}
            {imageToDisplay}
        </div>
    );
}