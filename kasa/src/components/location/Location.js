import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../collapse/Collapse";
import Gallery from "../gallery/Gallery";
import './Location.css';
import Error404 from "../error404/Error404";

export default function Location(){
    const params = useParams();
    const locations = JSON.parse(localStorage.getItem('locationsData'));
    const locationSelected = locations.find(location => location.id === params.idLoc);
    const isLocationFounded = locationSelected !== undefined;
    let stars= [];
    if(isLocationFounded){
    for (let i = 0; i < 5; i++) {
        if(i<locationSelected.rating){
            stars.push(<i key={i} className="fa fa-star"></i>);
        } else {
            stars.push(<i key={i} className="fa fa-star unchecked"></i>);
        }
        
    }
}
    return (<>
        { isLocationFounded ?
            
        <section className="locationSection">
            <div className="locationGallery"> 
                <Gallery pictures={locationSelected.pictures} ></Gallery>
            </div>
            <div className="locationInformations">
                <div className="locationTitleAndLocation">
                    <h1>{locationSelected.title}</h1>
                    <p> {locationSelected.location}</p>

                    <div className="locationTags">
                        {locationSelected.tags.map(( tag,index) => {
                            return <span key={index} className="locationTag">{tag}</span>
                        })}
                    </div>

                </div>

                <div className="locationHostAndStars">
                    <div className="locationHost">
                        <p className="locationHostName">{locationSelected.host.name}</p>
                        <img src={locationSelected.host.picture} alt="profil loueur" className="hostPicture"></img>
                        
                    </div>
                    <div className="locationStars">
                            {stars}
                        </div>
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
    
        : <Error404></Error404>}
        </>
    );
}