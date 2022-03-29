import React, {useState}  from "react";
import './Gallery.css';

export default function Gallery(props){

    const [isOpen , setIsOpen]=useState(false)

    const handleOpenCollapse = () => {
        setIsOpen(!isOpen);
    }

    // 3 on va gerer les event
    // 4 css

    return (
        <div className="gallery">
            {
                props.pictures.map(
                    pictureUrl => {
                        return <img src={pictureUrl} alt="presentation location" className="imageGallery"></img>
                    }
                )
            }
        </div>
    );
}