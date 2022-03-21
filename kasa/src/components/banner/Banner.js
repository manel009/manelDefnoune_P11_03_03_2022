import React from 'react';
import {Link} from 'react-router-dom';

function Banner() {
    return (
    <nav>
      <Link to="/"> Accueil</Link>
      <Link to="/about"> A propos</Link>
        <h1>Kasa</h1>
    </nav>
    );
    
    
}

export default Banner