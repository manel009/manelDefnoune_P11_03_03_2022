import React, {useState}  from "react";
import './Gallery.css';

export default function Gallery(props){

    const [positionToDisplay , setPositionToDisplay]=useState(0);

    
    const handlePrevious = () => {
        if(positionToDisplay === 0){
            setPositionToDisplay(props.pictures.length-1);
        } else {
            setPositionToDisplay(positionToDisplay-1);
        }
    }

    const handleNext = () => {
        if(positionToDisplay === props.pictures.length-1){
            setPositionToDisplay(0);
        } else {
            setPositionToDisplay(positionToDisplay+1);
        }
        
    }
    
   let imageToDisplay;
    // on masque toutes les images sauf celle à la position "positionToDisplay"
    for (var i = 0; i < props.pictures.length; i++) {
        if(i === positionToDisplay){
            imageToDisplay = <img src={props.pictures[i]} alt="presentation location" className="imageGallery"></img>
        }
    }


    /*
    // si on etait a la derniere slide et qu'on souhaite afficher la suivante, on repart a la premiere slide
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    // si on etait a la premiere slide et qu'on souhaite affichier la precedente, on affiche la derniere
    else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    // Sinon on affiche la slide a la position demandée
    else {
        slideIndex = n;
    }
    slides[slideIndex].style.display = "flex";
    */

    return (
        <div className="gallery">
            { props.pictures.length > 1 ? 
                <>
                <p id="prev" class="prev" onClick={handlePrevious} aria-label="Previous image">&#10094;</p> 
                <p id="next" class="next" onClick={handleNext} aria-label="Next image">&#10095;</p>
                </>
                : ""
            }
            {imageToDisplay}
        </div>
    );
}