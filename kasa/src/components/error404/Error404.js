import React from "react";
import {Link} from 'react-router-dom';
import './Error404.css'; 

export default function Error404(){
    return (
        <>
        <section className="error404">
            <h1>404</h1>
            <h3> Oups! La page que vous demandez n'existe pas. </h3>
            <Link to="/"> Retourner sur la page d'accueil</Link>
        </section>
        </>
    );
}