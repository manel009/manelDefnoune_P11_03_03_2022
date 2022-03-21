import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css';

function Banner() {
    return (
    <nav className='banner'>
      <img src={require('../../LOGO.png')} alt="Logo" />

      <div className='bannerLinks'>
        <Link to="/"> Accueil</Link>
      <Link to="/about"> A propos</Link>
      </div>
      
        
    </nav>
    );
    
    
}

export default Banner