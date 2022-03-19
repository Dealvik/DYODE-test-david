import React, { useState } from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/whitebgModel1.jpg';
import image2 from '../assets/whitebgModel2.jpg';

function NewArrivals() {

    const [showProducts, setShowProdcuts] = useState(false);
    
    // if ($(window).width() < 960) {
    //     alert('Less than 960');
    //  }
    //  else {
    //     alert('More than 960');
    //  }
    
    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 750px)").matches) {
            console.log("Screen width is lower than 350px")
            setShowProdcuts(true);
        } else {
            setShowProdcuts(false);
        }
    })
    
    return (
        <div className="NewArrivals">
            <h1>Shop New Arrivals</h1>
            
            <div className='NewArrivalsSlider'>
                <Carousel infiniteLoop={true} autoPlay={true} interval={10000} showThumbs={false} showIndicators={false} showArrows={true} showStatus={false}>
                    <div>
                        <div className='SliderRowDiv'>
                            <div className='product1'>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                            <div className='product2'>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                            <div className='product3' id={showProducts ? "hidden" : ""}>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                            <div className='product4' id={showProducts ? "hidden" : ""}>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='SliderRowDiv'>
                            <div className='product product1'>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                            <div className='product product2'>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                            <div className='product product3' id={showProducts ? "hidden" : ""}>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                            <div className='product4' id={showProducts ? "hidden" : ""}>
                                <a href="#">
                                    <img src={image2}/>
                                </a>
                                <h1>Product Title</h1>
                                <h2>WOMEN'S T-SHIRT</h2>
                                <p>$19.99</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default NewArrivals;