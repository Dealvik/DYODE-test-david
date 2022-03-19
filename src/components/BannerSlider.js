import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

function BannerSlider() {
    return (
        <div className='HeroCarousel'>
            <Carousel infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false}>
                <div>
                    <img src={image1}/>
                </div>
                <div>
                    <img src={image2}/>
                </div>
                <div>
                    <img src={image3} />
                </div>
            </Carousel>
        </div>
    );
}

export default BannerSlider;