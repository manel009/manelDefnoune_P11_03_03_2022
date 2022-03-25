import React from "react";
import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <img src={require('../../LOGO-FOOTER.png')} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
        
    );
}