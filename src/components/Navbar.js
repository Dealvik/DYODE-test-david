import React, { useState } from 'react';
import '../App.css';
import '../fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCheckSquare, faCoffee)

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <FontAwesomeIcon icon="bars" size="lg" color='white'/>
                </button>

                <div className='logo'>Logo</div>

                <div className='links' id={showLinks ? "hidden" : ""}>
                    <a href='/men'>MEN'S</a>
                    <a href='/women'>WOMEN'S</a>
                    <a href='/accessories'>ACCESSORIES</a>
                    <a href='/sale'>SALE!</a>
                </div>
            </div>

            <div className='rightSide'>
                  <a href='/search'><FontAwesomeIcon icon="magnifying-glass" size="lg" color='white'/></a>
                  <a href='/profile'><FontAwesomeIcon icon="user" size="lg" color='white'/></a>
                  <a href='/cart'><FontAwesomeIcon icon="cart-shopping" size="lg" color='white'/></a>
            </div>
        </div>
    );
}

export default Navbar;