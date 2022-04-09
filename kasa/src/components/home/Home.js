
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Home.css';


export default function Home() {
    
    // on utilise un state pour savoir quand on a les données
    const [data , setData]=useState(null)
    
    // on recupere les donnes des locations 
    fetch("./data.json").then( res => {
        return res.json()
      }).then(data => {
        setData(data);
        // stock les donnees dans le localstorage
        localStorage.setItem('locationsData', JSON.stringify(data));
      }).catch(err => {
          console.log(err, ' error')
        }
      )
    
    // si on a recuperer les données
    if(data != null) {
        return (
          <section className="homeSection">
            <div className="homeImg"> 
              <div className="blackLayer">
                <h1> Chez vous, partout et ailleurs </h1> 
              </div>
              
            </div>
            <div className="locations">
                {data.map( data =>{
                    return (
                    <div className="location" key={data.id}> 
                        <img src={data.cover} alt="cover"></img>
                        <div className="locationLink">
                          <Link to={`location/${data.id}`}>{data.title}</Link>
                        </div>
                        
                    </div>)
                  }
                )}
            </div>
            </section>
        );
    } 
    // sinon on affiche un message de chargement
    else {
        return "Chargement des locations ..."
    }
      
}