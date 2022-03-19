import React from 'react';
import '../App.css';
import '../fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope)

function Footer() {
    return (
        <footer>
            <div className='subscribe-content'>
                <div className='Signup-content'>
                    <FontAwesomeIcon icon="envelope" size="lg" color='white'/>
                    <h1>Sign Up & Stay Connected</h1>
                </div>
                <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
                <button onClick={() => (alert('Subscribed!'))}>
                    <h1>SUBSCRIBE</h1>
                </button>
            </div>
            <div className='lower-content'>
                <h1 className='CustomerService'>Customer Service</h1>
                <p>Accessibility</p>
                <p>Contact Us</p>
                <p>Return Policy</p>
                <p>FAQ</p>
                <p>Gift Certificates</p>
                <p>Wishlist</p>

                <h1 className='CustomerService'>Company</h1>
                <h1 className='CustomerService'>Follow Us</h1>

                <div className='icons'>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />

                    <FontAwesomeIcon icon="facebook" size="lg" color='white'/>
                    <FontAwesomeIcon icon="instagram" size="lg" color='white'/>
                    <FontAwesomeIcon icon="twitter" size="lg" color='white'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;