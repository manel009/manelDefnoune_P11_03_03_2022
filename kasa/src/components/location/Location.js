import React from "react";
import { useParams } from "react-router-dom";

export default function Location(){
    const params = useParams();
    const locations = JSON.parse(localStorage.getItem('locationsData'));
    const locationSelected = locations.find(location => location.id === params.idLoc);

    return (
        <section className="locationSection">
            <h1>Location : {params.idLoc}, Location trouve : {locationSelected.id}</h1> 
            {locationSelected.title}
            {locationSelected.cover}
            {locationSelected.pictures}
            {locationSelected.description}
        </section>
        
    );
}