import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../collapse/Collapse";
import './Location.css';

export default function Location(){
    const params = useParams();
    const locations = JSON.parse(localStorage.getItem('locationsData'));
    const locationSelected = locations.find(location => location.id === params.idLoc);
    
    let stars= [];
    for (let i = 0; i < 5; i++) {
        if(i<locationSelected.rating){
            stars.push(<i class="fa fa-star"></i>);
        } else {
            stars.push(<i class="fa fa-star unchecked"></i>);
        }
        
    }

    return (
        <section className="locationSection">
            <div className="locationGallery"> 
                gallery : {locationSelected.pictures} 
            </div>
            <div className="locationInformations">
                <div className="locationTitleAndLocation">
                    <h1>{locationSelected.title}</h1>
                    {locationSelected.location}
                </div>
                <div className="locationHost">
                    <p className="locationHostName">{locationSelected.host.name}</p>
                    <img src={locationSelected.host.picture} alt="profil loueur" className="hostPicture"></img>
                </div>
                
            </div>
            <div className="locationTagAndStars">
                <div className="locationTags">
                    {locationSelected.tags.map( tag => {
                        return <span className="locationTag">{tag}</span>
                    })}
                </div>

                <div className="locationStars">
                    {stars}
                </div>

            </div>
            <div className="locationDescAndEquipements">
                <div className="locationCollapse">
                    <Collapse title="Description" content={locationSelected.description}/>
                </div>
                <div className="locationCollapse">
                    <Collapse title="Equipements" content={locationSelected.equipments}/>
                </div>
            </div>
        </section>
        
    );
}