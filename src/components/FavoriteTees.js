import React from 'react';
import '../App.css';
import image3 from '../assets/2.jpg';

function NewArrivals() {
    return (
        <div className="FavoriteTees">
                <img className='Women' src={image3} alt="" />
                <h1 className='Title'>Our Favorite Tees</h1>
                <p>Everyday tees you need!</p>
                <button>Shop Now</button>
        </div>
    );
}

export default NewArrivals;