import React from 'react';
import '../App.css';
import image1 from '../assets/4.jpg';
import image2 from '../assets/mens.jpg';
import image3 from '../assets/2.jpg';

function Gallery() {
    return (
        <div className="Gallery">
            <div>
                <img className='Women' src={image1} alt="" />
                <h1 className="WomenText">Women's</h1>
            </div>
            <div>
                <img className='Men' src={image2} alt="" />
                <h1 className="MenText">Men's</h1>
            </div>
            <div>
                <img className='Accessories' src={image3} alt="" />
                <h1>Accessories</h1>
            </div>
        </div>
    );
}

export default Gallery;