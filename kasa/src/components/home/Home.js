
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
        setData(data)
      }).catch(err => {
          console.log(err, ' error')
        }
      )
    
    // si on a recuperer les données
    if(data != null) {
        return (
            <div className="locations">
                {data.map( data =>{
                    return (
                    <div className="location"> 
                        <Link to={`location/${data.id}`}>{data.title}</Link>
                    </div>)
                  }
                )}
            </div>
        );
    } 
    // sinon on affiche un message de chargement
    else {
        return "Chargement des locations ..."
    }
      
}