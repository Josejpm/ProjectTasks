import React from 'react';
import './top-bar.scss'

const TopBar = () => {
    return ( 
        <header className="app-header">
            <p className="user-name">
                Hola: <span> Jose Francisco </span> 
            </p>
            <nav className="main-nav" >
                <a href="!#"> Cerrar Sesion </a>
            </nav>
        </header>
        
     );
}
 
export default TopBar;