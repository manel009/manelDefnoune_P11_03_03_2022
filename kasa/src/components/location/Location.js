import React from "react";
import { useParams } from "react-router-dom";

export default function Location(){
    const params = useParams();

    return (
        <h1>Location : {params.idLoc}</h1> 
    );
}