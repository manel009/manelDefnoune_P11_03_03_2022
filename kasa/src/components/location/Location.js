import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../collapse/Collapse";
import './Location.css';

export default function Location(){
    const params = useParams();
    const locations = JSON.parse(localStorage.getItem('locationsData'));
    const locationSelected = locations.find(location => location.id === params.idLoc);

    return (
        <section className="locationSection">
            <div > caroussel : {locationSelected.pictures} </div>
            <div className="locationInformations">
                <div className="locationTitleAndLocation">
                    <h1>{locationSelected.title}</h1>
                    {locationSelected.location}
                </div>
                <div className="locationHost">
                    {locationSelected.host.name}
                    <img src={locationSelected.host.picture} alt="profil loueur"></img>
                </div>
                
            </div>
            <div className="locationTagAndStars">
                <span>{locationSelected.tags}</span>
                <span>{locationSelected.rating}</span>
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